const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const episodePage = path.resolve(`./src/pages/episode.js`);
  const result = await graphql(
    `
      {
        allFeedSafareigFm(sort: { order: DESC, fields: isoDate }) {
          nodes {
            title
            content
            contentSnippet
            isoDate(formatString: "YYYY / MM / DD")
            itunes {
              episode
            }
            enclosure {
              url
            }
          }
          totalCount
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error loading episodes`, result.errors);
    return;
  }

  const episodes = result.data.allFeedSafareigFm.nodes;
  const episodesLength = parseInt(episodes.length);
  const episodesCount = parseInt(result.data.allFeedSafareigFm.totalCount);

  if (episodesLength > 0 && episodesLength === episodesCount) {
    episodes.forEach((e, i) => {
      const {
        title,
        content: descriptionHtml,
        contentSnippet: description,
        isoDate: date,
        itunes: { episode: episodeNumber },
        enclosure: { url: audioFile },
      } = e;
      const previous = i === episodesLength - 1 ? null : episodes[i + 1];
      const next = i === 0 ? null : episodes[i - 1];

      createPage({
        path: episodeNumber,
        component: episodePage,
        context: {
          title,
          descriptionHtml,
          description,
          date,
          episodeNumber,
          audioFile,
          previous,
          next,
        },
      });
    });
  }
};

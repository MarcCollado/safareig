import { getRelatedEpisodes } from './src/utils/random';
const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const episodePage = path.resolve(`src/pages/episode.js`);
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
    reporter.panicOnBuild(`Error loading episodes:`, result.errors);
    return;
  }

  const episodes = result.data.allFeedSafareigFm.nodes;
  const episodesLength = parseInt(episodes.length);
  const episodesCount = parseInt(result.data.allFeedSafareigFm.totalCount);

  // Create a page for each episode through path
  if (episodesLength > 0 && episodesLength === episodesCount) {
    episodes.forEach((e, i) => {
      // Get episode information from XML
      const {
        title,
        content: descriptionHtml,
        contentSnippet: description,
        isoDate: date,
        itunes: { episode: episodeNumber },
        enclosure: { url: audioFile },
      } = e;

      // Find previous and next episode
      const previous = i === episodesLength - 1 ? null : episodes[i + 1];
      const next = i === 0 ? null : episodes[i - 1];

      // Generate related episodes
      let relatedEpisodes = [];
      const relatedEpisodesNumbers = getRelatedEpisodes(
        2,
        episodesCount,
        episodeNumber
      );
      relatedEpisodesNumbers.forEach((relatedEpisodeNumber) => {
        const relatedEpisode = episodes.find(
          (e) => e.itunes.episode == relatedEpisodeNumber
        );
        const relatedEpisodeTitle = relatedEpisode.title;
        relatedEpisodes = [
          ...relatedEpisodes,
          { title: relatedEpisodeTitle, episodeNumber: relatedEpisodeNumber },
        ];
      });

      createPage({
        component: episodePage,
        context: {
          audioFile,
          description,
          descriptionHtml,
          date,
          episodeNumber,
          next,
          previous,
          relatedEpisodes,
          title,
        },
        path: episodeNumber,
      });
    });
  }
};

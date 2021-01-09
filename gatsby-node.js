const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

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

  if (episodes.length > 0) {
    episodes.forEach((e, i) => {
      const {
        title,
        content: descriptionHtml,
        contentSnippet: description,
        isoDate: date,
        itunes: { episode: episodeNumber },
        enclosure: { url: audioFile },
      } = e;
      const previous = i === episodes.length - 1 ? null : episodes[i + 1];
      const next = i === 0 ? null : episodes[i - 1];

      createPage({
        path: episodeNumber,
        component: episodePage,
        context: {
          previous,
          next,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

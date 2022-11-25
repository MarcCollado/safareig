const path = require('path');
// import { getRandom, getRelatedEpisodes } from './src/utils/random';
// import { trimDescriptions } from './src/utils/trim';
const utils = require('./src/utils/node');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const episodePage = path.resolve(`src/components/episode-page.js`);
  const episodesGQL = await graphql(
    `
      {
        allFeedSafareigFm(sort: { isoDate: DESC }) {
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

  if (episodesGQL.errors) {
    reporter.panicOnBuild(`Error loading episodes:`, episodesGQL.errors);
    return;
  }

  const episodes = episodesGQL.data.allFeedSafareigFm.nodes;
  const episodesLength = parseInt(episodes.length);
  const episodesCount = parseInt(episodesGQL.data.allFeedSafareigFm.totalCount);

  // Create a page for each episode through path
  if (episodesLength > 0 && episodesLength === episodesCount) {
    episodes.forEach((e, i) => {
      // Get episode information from XML
      const {
        title,
        isoDate: date,
        itunes: { episode: episodeNumber },
        enclosure: { url: audioFile },
      } = e;

      // Generate show description and show notes
      const { showDescription } = utils.trimDescriptions(
        e.contentSnippet,
        e.content
      );
      const { showNotes } = utils.trimDescriptions(e.contentSnippet, e.content);

      // Find previous and next episode
      const previous = i === episodesLength - 1 ? null : episodes[i + 1];
      const next = i === 0 ? null : episodes[i - 1];

      // Generate related episodes
      let relatedEpisodes = [];

      // Use getRandom function to use with commonJS
      // The ES6 version doesn't require the function
      const relatedEpisodesNumbers = utils.getRelatedEpisodes(
        2,
        episodesCount,
        episodeNumber,
        utils.getRandom
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
          showDescription,
          showNotes,
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

  // Fetch markdowns

  const postPage = path.resolve(`src/components/post-page.js`);
  // const tagPage = path.resolve(`src/components/tagPage.js`);

  // Fetch all markdown posts
  const postsGQL = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              author
              date(formatString: "YYYY / MM / DD")
              featured
              meta
              path
              published
              tags
              title
            }
            html
            id
            timeToRead
            wordCount {
              words
            }
          }
        }
      }
    }
  `);

  if (postsGQL.errors) {
    reporter.panicOnBuild(`Error loading posts:`, postsGQL.errors);
    return;
  }

  // posts -> [{ node }, { node }, ..., { node }]
  const posts = postsGQL.data.allMarkdownRemark.edges;

  // Create a page for each post through path
  posts.forEach((post, index) => {
    const { author, date, featured, meta, path, published, tags, title } =
      post.node.frontmatter;
    const { html, timeToRead } = post.node;
    // Get the previous and next post
    const prev =
      index === posts.length - 1 ? posts[index].node : posts[index + 1].node;
    const next = index === 0 ? posts[index].node : posts[index - 1].node;
    // Get a random post for the last post since there's no "next" for it
    const rdm = posts[utils.getRandom(0, posts.length - 1)].node;

    createPage({
      component: postPage,
      context: {
        author,
        date,
        featured,
        html,
        meta,
        next,
        prev,
        published,
        rdm,
        tags,
        timeToRead,
        title,
      },
      path: path,
    });
  });

  // List all unique tags
  // let allTags = [];
  // posts.forEach(({ node }) => {
  //   allTags = [...allTags, ...node.frontmatter.tags];
  // });
  // const uniqueTags = [...new Set(allTags)];

  // Create a page for each tag
  // uniqueTags.forEach((tag) => {
  //   createPage({
  //     path: `/tags/${tag}`,
  //     component: tagPage,
  //     context: { tag },
  //   });
  // });
};

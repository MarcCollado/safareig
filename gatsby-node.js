const path = require(`path`);

import { getRelatedEpisodes } from './src/utils/random';
import { trimDescriptions } from './src/utils/trim';

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const episodePage = path.resolve(`src/pages/episode.js`);
  const episodesGQL = await graphql(
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
      const { showDescription } = trimDescriptions(e.contentSnippet, e.content);
      const { showNotes } = trimDescriptions(e.contentSnippet, e.content);

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

  const postPage = path.resolve(`src/components/post-page.js`);
  const postsGQL = await graphql(
    `
      {
        allGhostPost(sort: { order: DESC, fields: [published_at] }) {
          nodes {
            id
            authors {
              cover_image
              name
            }
            excerpt
            html
            primary_tag {
              name
            }
            published_at(formatString: "YYYY / MM / DD")
            reading_time
            slug
            tags {
              name
            }
            title
          }
        }
      }
    `
  );

  if (postsGQL.errors) {
    reporter.panicOnBuild(`Error loading posts:`, postsGQL.errors);
    return;
  }

  const posts = postsGQL.data.allGhostPost.nodes;

  // Create a page for each post
  if (posts) {
    posts.forEach((p, i) => {
      const {
        id,
        authors,
        excerpt,
        html,
        primary_tag,
        published_at,
        reading_time,
        slug,
        tags,
        title,
      } = p;

      // Find previous and next episode
      // const previous = i === episodesLength - 1 ? null : episodes[i + 1];
      // const next = i === 0 ? null : episodes[i - 1];

      createPage({
        component: postPage,
        context: {
          id,
          authors,
          excerpt,
          html,
          // next,
          // previous,
          primary_tag,
          published_at,
          reading_time,
          slug,
          tags,
          title,
        },
        path: `bugada/${slug}`,
      });
    });
  }
};

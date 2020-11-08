import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Safareig FM`,
    description: `El teu aperitiu setmanal on analitzem com la tecnologia està canviant la societat que ens envolta. Cada dilluns, en 20 minuts, i exclusivament en català.`,
    siteUrl: `https://www.safareig.fm`,
    author: {
      name: `Ramon Gilabert & Marc Collado`,
    },
    social: {
      twitter: `https://twitter.com/safareigfm`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      // https://github.com/mottox2/gatsby-source-rss-feed
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://media.rss.com/mindyourbusiness/feed.xml`,
        name: `SafareigFm`,
        // https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        //   customFields: {
        //     item: ['itunes:order'],
        //   },
        // },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Safareig FM`,
        short_name: `safareig.fm`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#32C5FF`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `g34v195l`,
        dataset: `production`,
        watchmode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

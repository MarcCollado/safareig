import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    header: `Safareig`,
    title: `Safareig | El teu podcast en català`,
    description: `El teu aperitiu setmanal on analitzem com la tecnologia està canviant la societat que ens envolta. Cada dilluns, en 20 minuts, i exclusivament en català.`,
    image: `content/assets/meta.png`,
    siteUrl: `https://www.safareig.fm`,
    author: {
      name: `Ramon Gilabert & Marc Collado`,
    },
    language: `ca`,
    social: {
      twitter: `https://twitter.com/safareigfm`,
      email: `fem@safareig.fm`,
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
        url: `https://media.rss.com/safareig/feed.xml`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-184751048-1',
        head: false,
        // anonymize: true,
        // respectDNT: true,
        // exclude: ["/**/*", "/"],
        // optimizeId: 'LE_OPTIMIZE_TRACKING_ID',
        // experimentId: 'GOOGLE_EXPERIMENT_ID',
        // variationId: 'GOOGLE_OPTIMIZE_VARIATION_ID',
        defer: false,
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn:
          'https://d090893262b643eca5c2379948f66eed@o326719.ingest.sentry.io/5564542',
        autoSessionTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Safareig | El teu podcast en català`,
        short_name: `Safareig`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#32C5FF`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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
  ],
};

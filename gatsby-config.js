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
    // FILESYSTEM
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // MARKDOWN
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
    // IMAGES & ASSETS
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // OFFLINE
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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
    // UTILS & HELPERS
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
  ],
};

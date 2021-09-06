export default {
  siteMetadata: {
    header: `Safareig`,
    title: `Safareig | El teu podcast de tecnologia en català`,
    description: `El teu aperitiu setmanal on analitzem com la tecnologia està canviant la societat que ens envolta. Cada dilluns, en 20 minuts, i exclusivament en català.`,
    image: `content/assets/meta.png`,
    siteUrl: `https://www.safareig.fm`,
    siteLanguage: `ca`,
    author: {
      name: `Ramon Gilabert & Marc Collado`,
    },
    social: {
      email: `fem@safareig.fm`,
      twitter: `https://twitter.com/safareigfm`,
    },
  },
  plugins: [
    // FILESYSTEM
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    // MARKDOWN
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 1024,
              related: false,
              noIframeBorder: true,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
              showCaptions: false,
              quality: 80,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // RSS FEED — PODCAST
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
    // IMAGES & ASSETS
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // OFFLINE
    // To learn more, visit: https://gatsby.dev/offline
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
    `gatsby-plugin-offline`,
    // NEWSLETTER
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://safareig.us5.list-manage.com/subscribe/post?u=06724b974bab7aa21dd921241&amp;id=56cedc08e9`,
        timeout: 3500,
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

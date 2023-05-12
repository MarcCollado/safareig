module.exports = {
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
    // RSS FEED — BUGADA
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
              }
            `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.meta,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
                  {
                    allMarkdownRemark(
                      filter: {
                        fileAbsolutePath: { regex: "/content/articles/" } }
                      sort: { frontmatter: { date: DESC } }
                    ) {
                      nodes {
                        frontmatter {
                          date
                          meta
                          path
                          tags
                          title
                        }
                        html
                        id
                      }
                    }
                  }
                `,
            match: '^/bugada',
            output: '/rss.xml',
            title: 'La Bugada',
          },
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
        },
      },
    },
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
        icon: `content/assets/manifest.png`,
        lang: `ca`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/*`],
      },
    },
    // UTILS & HELPERS
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
  ],
  trailingSlash: `never`,
};

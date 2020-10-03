import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: `Safareig FM`,
    description: `El teu aperitiu setmanal on analitzem com la tecnologia està canviant la societat que ens envolta. Cada dilluns, en 20 minuts, i exclusivament en català.`,
    siteUrl: `https://www.safareig.fm`,
    author: {
      name: `Ramon Gilabert & Marc Collado`,
    },
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
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
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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

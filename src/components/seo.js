import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ pageTitle, pageDescription, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            author {
              name
            }
            language
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const title = pageTitle || site.siteMetadata?.title;
  const description = pageDescription || site.siteMetadata?.description;
  const image = `${site.siteMetadata?.siteUrl}/meta.png`;
  const url = site.siteMetadata?.siteUrl;
  const author = site.siteMetadata?.author.name;
  const language = site.siteMetadata?.language || `ca`;
  const twitter = site.siteMetadata?.social.twitter;

  return (
    <Helmet
      title={title}
      meta={[
        // HTML TAGS — https://gist.github.com/whitingx/3840905
        { name: `description`, content: description },
        { name: `image`, content: image },
        { name: `language`, content: language },
        { name: `url`, content: url },
        { name: `author`, content: author },

        // OG TAGS — https://opengraphprotocol.org
        { property: `og:url`, content: url },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:image`, content: image },
        { property: `og:type`, content: `website` },

        // TWITTER CARD
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:creator`, content: twitter },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: `twitter:image`, content: image },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  pageTitle: `Safareig | El teu podcast en català`,
  pageDescription: ``,
  meta: [],
};

SEO.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;

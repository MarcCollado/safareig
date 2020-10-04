import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Cover from "../components/cover";
import Episode from "../components/episode";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";
import Start from "../components/start";
import Subscribe from "../components/subscribe";

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const episodes = data.allSanityEpisode?.nodes;

  return (
    <>
      <SEO location={location} title={siteTitle} />
      <Cover />
      <Bio />
      <Subscribe />
      <Start />
      {episodes.map((episode) => {
        const {
          id,
          episodeNumber,
          title,
          description,
          releaseDate: date,
        } = episode;
        const path = episode.path.current;
        return (
          <Episode
            key={id}
            date={date}
            episodeNumber={episodeNumber}
            title={title}
            description={description}
          />
        );
      })}
      <Share />
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allSanityEpisode {
      nodes {
        id
        releaseDate
        episodeNumber
        title
        description
        isFeatured
        path {
          current
        }
      }
    }
  }
`;

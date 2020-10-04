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
        const { id, title, description, releaseDate: date } = episode;
        const path = episode.path.current;
        return (
          <Episode
            key={id}
            title={title}
            description={description}
            date={date}
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
        title
        description
        releaseDate
        path {
          current
        }
      }
    }
  }
`;

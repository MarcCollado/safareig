import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { CardContainer, CardTitle } from "./styled";
import SubscribeSvg from "../../content/assets/subscribe.svg";
import ChevronRight from "../../content/assets/chevron-right.svg";

// Styled components

const PodcastContainer = styled.div`
  /* Display & Box Model */
  height: 4.75rem;
  width: 20rem;
  padding: 0rem 1rem;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;

  &:first-child {
    margin-block-start: -0.5rem;
  }

  &:last-child {
    margin-block-end: 0.5rem;
  }
`;

const StyledImage = styled(Img)`
  width: 3rem;
  margin-inline-start: 0.5rem;
`;

const StyledLink = styled.a`
  /* Display & Box Model */
  margin-inline-start: -1.5rem;
`;

// Main components

const PodcastLink = (art, link, name) => {
  return (
    <PodcastContainer>
      <StyledImage fluid={art}></StyledImage>
      <StyledLink href={link}>{name}</StyledLink>
      <ChevronRight />
    </PodcastContainer>
  );
};

const Subscribe = ({ data }) => {
  const apple = data.apple.childImageSharp.fluid;
  const google = data.google.childImageSharp.fluid;
  const spotify = data.spotify.childImageSharp.fluid;
  const overcast = data.overcast.childImageSharp.fluid;
  const generatePodcastList = [apple, google, spotify, overcast].map((p) =>
    PodcastLink(p, "#", "__podcastName__")
  );
  return (
    <CardContainer
      width={20}
      plain
      flexFlow="column nowrap"
      color="var(--gray)"
    >
      <CardTitle>
        <SubscribeSvg />
        <h2>Subscriu-te</h2>
      </CardTitle>
      {generatePodcastList}
      {/* <ImageContainer>
        <StyledImage alt="Safareig cover art" fluid={apple} />
      </ImageContainer> */}
    </CardContainer>
  );
};

// GraphQL StaticQuery

export default (props) => (
  <StaticQuery
    query={graphql`
      query SubscribeQuery {
        apple: file(relativePath: { eq: "apple-podcasts.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        google: file(relativePath: { eq: "google-podcasts.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        spotify: file(relativePath: { eq: "rss-feed.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        overcast: file(relativePath: { eq: "overcast.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <Subscribe data={data} {...props} />}
  />
);

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { CardContainer, CardTitle } from "./styled";
import SubscribeSvg from "../../content/assets/subscribe.svg";
import ChevronRight from "../../content/assets/chevron-right.svg";

// Styled components

const PodcastItemContainer = styled.div`
  /* Display & Box Model */
  width: 105%;
  height: 4rem;
  margin-block-start: 0.25rem;
  border-radius: 1rem;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & :hover {
    background-color: var(--white);
  }
`;

const StyledImage = styled(Img)`
  width: 3rem;
  margin-inline-start: 0.5rem;
`;

const StyledLink = styled.p`
  font-weight: 600;
  margin-inline-start: -1.5rem;
  opacity: 0.95;
`;

// Main components

const PodcastLink = (id, art, link, name) => {
  return (
    <PodcastItemContainer key={id}>
      <StyledImage fluid={art}></StyledImage>
      <StyledLink href={link}>{name}</StyledLink>
      <ChevronRight />
    </PodcastItemContainer>
  );
};

const Subscribe = ({ data }) => {
  const apple = data.apple.childImageSharp.fluid;
  const google = data.google.childImageSharp.fluid;
  const spotify = data.spotify.childImageSharp.fluid;
  const overcast = data.overcast.childImageSharp.fluid;
  const generatePodcastList = [apple, google, spotify, overcast].map((p) =>
    PodcastLink(p.src, p, "#", "Apple Podcasts")
  );
  return (
    <CardContainer
      width={17}
      flexFlow="column nowrap"
      color="var(--gray)"
      plain
    >
      <CardTitle>
        <SubscribeSvg />
        <h2>Subscriu-te</h2>
      </CardTitle>
      {generatePodcastList}
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

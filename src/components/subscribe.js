import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: var(--white);
  }
`;

const StyledImage = styled(Img)`
  width: 3rem;
  margin-inline-start: 0.5rem;
`;

const StyledLink = styled.p`
  font-weight: 600;
  margin-inline-start: -2rem;
  opacity: 0.95;
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.5rem;
`;

// Main components

const PodcastLink = (id, art, link, name) => {
  return (
    <PodcastItemContainer key={id}>
      <StyledImage fluid={art}></StyledImage>
      <StyledLink href={link}>{name}</StyledLink>
      <StyledChevron />
    </PodcastItemContainer>
  );
};

const Subscribe = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    {
      allSanityPlayer(sort: { fields: sort, order: ASC }) {
        nodes {
          id
          name
          url
          icon {
            asset {
              fluid {
                sizes
                src
                srcSet
                base64
                aspectRatio
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
    }
  `);
  const generatePodcastList = data.allSanityPlayer?.nodes.map((p) =>
    PodcastLink(p.id, p.icon.asset.fluid, p.url, p.name)
  );
  return (
    <CardContainer flexFlow="column nowrap" flat>
      <CardTitle>
        <SubscribeSvg />
        <h2>Subscriu-te</h2>
      </CardTitle>
      {generatePodcastList}
    </CardContainer>
  );
};

export default Subscribe;

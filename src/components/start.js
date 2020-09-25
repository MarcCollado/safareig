import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { CardContainer, CardTitle } from "./styled";
import StartHereSvg from "../../content/assets/start-here.svg";

// Styled

const StyledTitle = styled.div`
  /* Display & Box Model */
  height: 5rem;
  width: 20rem;
  padding: 0rem 1rem;
  /* border: 1px solid black; */

  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
`;

const StyledImage = styled(Img)`
  /* Display & Box Model */
  width: 3rem;
  margin-inline-start: 0.5rem;
`;

const StyledLink = styled.a`
  /* Display & Box Model */
  margin-inline-start: -1.5rem;
`;

// Components

const StartHere = ({ data }) => {
  // const generatePodcastList = [apple, google, spotify, overcast].map((p) =>
  //   PodcastLink(p, "#", "__podcastName__")
  // );
  return (
    <CardContainer width={20} flexFlow="column nowrap" color="var(--white)">
      <CardTitle>
        <StartHereSvg />
        <h2>Comença Aquí</h2>
      </CardTitle>
      <p>
        És difícil començar a escoltar un podcast, i sempre hi ha episodis que
        són més bons. Nosaltres et recomanem aquests:
      </p>
      <ul>
        <li>Featured 1</li>
        <li>Featured 2</li>
        <li>Featured 3</li>
      </ul>
    </CardContainer>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query StartHereQuery {
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
      }
    `}
    render={(data) => <StartHere data={data} {...props} />}
  />
);

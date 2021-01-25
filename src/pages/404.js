import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Footer from '../components/footer';
import { FullPageCard, InnerCardContainer } from '../styled/cards';
import { PillLinkComposer } from '../styled/link';
import { GlobalContainer, MainContainer } from '../utils/containers';

import { fluid } from '../utils/fluid';
import { getRandom } from '../utils/random';

const FourOFourImage = styled.div`
  width: 100%;
  margin-block-end: 24px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-block-end: ${fluid(24, 36)};
  }
`;

const FourOFourContainer = styled.div`
  margin-block-end: 24px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin-block-end: ${fluid(24, 48)};
  }
`;

const FourOFourText = styled.p`
  margin-block-end: 36px;
  text-align: center;

  @media (min-width: 768px) {
    margin-block-end: ${fluid(36, 48)};
  }
`;

const NotFoundPage = ({ data }) => {
  const totalCount = data.allFeedSafareigFm?.totalCount;
  const randomEspisode = getRandom(1, totalCount);
  const sources = [
    data.FourOFourMobile.childImageSharp.fluid,
    {
      ...data.FourOFourDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <GlobalContainer>
      <MainContainer>
        <FullPageCard>
          <InnerCardContainer>
            <FourOFourImage>
              <Img
                fluid={sources}
                alt="Safareig 404 image"
                style={{ width: '100%', height: '100%' }}
              />
            </FourOFourImage>
            <FourOFourContainer>
              <FourOFourText>
                Aquesta pàgina encara no existeix, però possiblement d’això en
                podríem parlar extensament en un capítol.
              </FourOFourText>
              <Link to={`/${randomEspisode}`}>
                <PillLinkComposer text="Escolta'ns" />
              </Link>
            </FourOFourContainer>
          </InnerCardContainer>
        </FullPageCard>
      </MainContainer>
      <Footer />
    </GlobalContainer>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    allFeedSafareigFm {
      totalCount
    }
    FourOFourMobile: file(relativePath: { eq: "404-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    FourOFourDesktop: file(relativePath: { eq: "404-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

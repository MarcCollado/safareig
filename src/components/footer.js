import React from 'react';
import styled from 'styled-components';

import { fluid } from '../utils/fluid';

// Styled components

const FooterContainer = styled.footer`
  width: 100%;
  margin: 24px auto 16px;
  text-align: center;

  @media (min-width: 768px) {
    margin: ${fluid(24, 48)} auto ${fluid(16, 36)};
  }
`;

const Line = styled.hr`
  width: 80%;
  margin-block-end: 24px;
  opacity: 0.3;

  @media (min-width: 768px) {
    margin-block-end: ${fluid(24, 48)};
  }
`;

const InLineText = styled.p`
  display: inline-block;
  margin: 4px;
  opacity: 0.3;
`;

const InLineLink = styled.a`
  display: inline-block;
`;

// Main components

const Footer = () => (
  <FooterContainer>
    <Line />
    <InLineText>Safareig © {new Date().getFullYear()}</InLineText>
    <br />
    <InLineText>Explora el </InLineText>
    <InLineLink
      target="_blank"
      rel="noreferrer"
      href="https://github.com/MarcCollado/safareig"
    >
      codi de la pàgina
    </InLineLink>
  </FooterContainer>
);

export default Footer;

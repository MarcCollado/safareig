import React from 'react';
import styled from 'styled-components';

// Styled components

const FooterContainer = styled.footer`
  width: 100%;
  margin: 16px auto;
  text-align: center;
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

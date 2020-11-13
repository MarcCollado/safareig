import React from 'react';
import styled from 'styled-components';

// Styled components

const FooterContainer = styled.footer`
  width: 100%;
  margin: 1rem auto;
  text-align: center;
`;

const InLineText = styled.p`
  display: inline-block;
  margin: 0.25rem;
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
    <InLineLink href="https://github.com/MarcCollado/safareig">
      codi de la pàgina
    </InLineLink>
  </FooterContainer>
);

export default Footer;

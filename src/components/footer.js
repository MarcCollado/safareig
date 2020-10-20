import React from "react";
import styled from "styled-components";

// Styled components

const FooterContainer = styled.footer`
  width: 20rem;
  margin: 1.5rem auto;
  text-align: center;
`;

// Main components

const Footer = () => (
  <FooterContainer>
    <p>
      Safareig © {new Date().getFullYear()}
      <br></br>
      Explora el {` `}
      <a href="https://github.com/MarcCollado/safareig">codi de la pàgina</a>
    </p>
  </FooterContainer>
);
export default Footer;

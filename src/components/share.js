import React from "react";
import styled from "styled-components";

import {
  CardFeatured,
  CardTitle,
  SimpleLinkContainer,
  SimpleLink,
} from "./styled";
import ShareIcon from "../../content/assets/share.svg";
import Chevron from "../../content/assets/chevron-right-cta.svg";

// Styled Components

const ActionContainer = styled.div`
  /* Display & Box Model */
  margin-bottom: 1.5rem;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  p {
    margin-inline-start: 1.5rem;
    padding: 0rem;
  }
`;

const StyledChevron = styled(Chevron)`
  /* Display & Box Model */
  max-height: 0.75rem;
  margin-inline-start: 0.5rem;
`;

// Components

const Share = () => (
  <CardFeatured width={17} flexFlow="column nowrap" feat>
    <CardTitle>
      <ShareIcon />
      <h2>Fes Safareig</h2>
    </CardTitle>
    <p>
      Tens algun tema a suggerir? Vols ajudar-nos amb el podcast? Tens feedback
      general? No dubtis en contactar i començar el Safareig.
    </p>
    <SimpleLinkContainer>
      <SimpleLink>Contacta a Safareig</SimpleLink>
      <StyledChevron />
    </SimpleLinkContainer>
  </CardFeatured>
);

export default Share;

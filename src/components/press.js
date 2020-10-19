import React from "react";
import styled from "styled-components";

import {
  CardFeatured,
  CardTitle,
  SimpleLinkContainer,
  SimpleLink,
} from "./styled";
import PressKitIcon from "../../content/assets/press-kit.svg";
import Chevron from "../../content/assets/chevron-right-cta.svg";

// Styled Components

const StyledChevron = styled(Chevron)`
  /* Display & Box Model */
  max-height: 0.75rem;
  margin-inline-start: 0.5rem;
`;

// Components

const Press = () => (
  <CardFeatured flexFlow="column nowrap" flat>
    <CardTitle>
      <PressKitIcon />
      <h2>Press Kit</h2>
    </CardTitle>
    <p>
      Hem preparat la descripció de Safareig i un recull d'imatges sobre el
      podcast perquè et sigui fàcil començar a escriure.
    </p>
    <SimpleLinkContainer>
      <SimpleLink>Descarrega'l</SimpleLink>
      <StyledChevron />
    </SimpleLinkContainer>
  </CardFeatured>
);

export default Press;

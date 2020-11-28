import React from 'react';

import {
  CardFeatured,
  CardTitle,
  InnerCardContainer,
  SimpleLinkContainer,
  SimpleLink,
} from './styled';
import PressKitIcon from '../../content/assets/press-kit.svg';
import Chevron from '../../content/assets/chevron-right-cta.svg';

// Components

const Press = () => (
  <CardFeatured flexFlow="column nowrap" flat>
    <a href="https://www.icloud.com/iclouddrive/0iobVuMuVWWs5pBiSTMLbtvgQ">
      <InnerCardContainer>
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
          <Chevron />
        </SimpleLinkContainer>
      </InnerCardContainer>
    </a>
  </CardFeatured>
);

export default Press;

import React from 'react';

import { CardRegular, CardTitle, InnerCardContainer } from './styled';
import { SimpleLinkComposer } from '../styled/link';

import PressKitIcon from '../../content/assets/press-kit.svg';

// Components

const Press = () => (
  <CardRegular>
    <a
      href="https://www.icloud.com/iclouddrive/0iobVuMuVWWs5pBiSTMLbtvgQ"
      target="_blank"
      rel="noreferrer"
    >
      <InnerCardContainer>
        <CardTitle>
          <PressKitIcon />
          <h2>Press Kit</h2>
        </CardTitle>
        <p>
          Hem preparat la descripció de Safareig i un recull d'imatges sobre el
          podcast perquè et sigui fàcil començar a escriure.
        </p>
        <SimpleLinkComposer text="Descarrega'l" />
      </InnerCardContainer>
    </a>
  </CardRegular>
);

export default Press;

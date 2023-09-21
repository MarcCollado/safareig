import React from 'react';

import { FlatCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { FeaturedLinkComposer } from '../styled/link';

import PressKitIcon from '../../content/assets/press-kit.svg';

// Components

const Press = () => (
  <FlatCard>
    <a href="https://twitter.com/safareigfm">
      <InnerCardContainer>
        <CardTitle>
          <PressKitIcon />
          <h2>Press Kit</h2>
        </CardTitle>
        <p>
          Hem preparat la descripció de Safareig i un recull d'imatges perquè et
          sigui fàcil començar.
        </p>
        <FeaturedLinkComposer color="blue" text="Descarrega'l" />
      </InnerCardContainer>
    </a>
  </FlatCard>
);

export default Press;

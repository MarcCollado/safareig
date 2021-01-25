import React from 'react';

import { FlatCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { FeaturedLinkComposer } from '../styled/link';

import PressKitIcon from '../../content/assets/press-kit.svg';

// Components

const Press = () => (
  <FlatCard>
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
          Vols escriure sobre nosaltres? Hem preparat un recull de text amb
          imatges sobre Safareig.
        </p>
        <FeaturedLinkComposer color="blue" text="Descarrega'l" />
      </InnerCardContainer>
    </a>
  </FlatCard>
);

export default Press;

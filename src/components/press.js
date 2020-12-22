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
          Vols escriure sobre nosaltres? Hem preparat un recull de text amb
          imatges sobre Safareig.
        </p>
        <SimpleLinkComposer text="Descarrega'l" />
      </InnerCardContainer>
    </a>
  </CardRegular>
);

export default Press;

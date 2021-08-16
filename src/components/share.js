import React from 'react';

import { FlatCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { FeaturedLinkComposer } from '../styled/link';

import ShareSvg from '../../content/assets/share.svg';

// Components

const Share = () => (
  <FlatCard>
    <a href={'mailto:fem@safareig.fm'}>
      <InnerCardContainer>
        <CardTitle>
          <ShareSvg />
          <h2>Fes Safareig</h2>
        </CardTitle>
        <p>
          Tens algun tema a suggerir? Vols donar-nos un cop de mà amb el
          podcast? No dubtis en contactar.
        </p>
        <FeaturedLinkComposer color="blue" text="Contacta a Safareig" />
      </InnerCardContainer>
    </a>
  </FlatCard>
);

export default Share;

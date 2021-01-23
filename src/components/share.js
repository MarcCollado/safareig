import React from 'react';

import { FlatCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { FeaturedLinkComposer } from '../styled/link';

import ShareIcon from '../../content/assets/share.svg';

// Components

const Share = () => (
  <FlatCard>
    <a href={'mailto:fem@safareig.fm'}>
      <InnerCardContainer>
        <CardTitle>
          <ShareIcon />
          <h2>Fes Safareig</h2>
        </CardTitle>
        <p>Tens algun tema a suggerir? No dubtis en contactar-nos.</p>
        <FeaturedLinkComposer color="blue" text="Contacta a Safareig" />
      </InnerCardContainer>
    </a>
  </FlatCard>
);

export default Share;

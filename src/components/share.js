import React from 'react';

import { CardRegular, CardTitle, InnerCardContainer } from './styled';
import { SimpleLinkComposer } from '../styled/link';

import ShareIcon from '../../content/assets/share.svg';

// Components

const Share = () => (
  <CardRegular>
    <a href={'mailto:fem@safareig.fm'}>
      <InnerCardContainer>
        <CardTitle>
          <ShareIcon />
          <h2>Fes Safareig</h2>
        </CardTitle>
        <p>Tens algun tema a suggerir? No dubtis en contactar-nos.</p>
        <SimpleLinkComposer text="Contacta a Safareig" />
      </InnerCardContainer>
    </a>
  </CardRegular>
);

export default Share;

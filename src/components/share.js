import React from 'react';

import {
  CardFeatured,
  CardTitle,
  SimpleLinkContainer,
  SimpleLink,
} from './styled';
import ShareIcon from '../../content/assets/share.svg';
import Chevron from '../../content/assets/chevron-right-cta.svg';

// Components

const Share = () => (
  <CardFeatured flexFlow="column nowrap">
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
      <Chevron />
    </SimpleLinkContainer>
  </CardFeatured>
);

export default Share;

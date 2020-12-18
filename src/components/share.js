import React from 'react';

import { CardRegular, CardTitle, InnerCardContainer } from './styled';
import Chevron from '../styled/chevron';
import { SimpleLink, CardLinkContainer } from '../styled/link';

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
        <p>
          Tens algun tema a suggerir? Vols ajudar-nos amb el podcast? Tens
          feedback general? No dubtis en contactar i començar el Safareig.
        </p>
        <CardLinkContainer>
          <SimpleLink>Contacta a Safareig</SimpleLink>
          <Chevron color="blue" />
        </CardLinkContainer>
      </InnerCardContainer>
    </a>
  </CardRegular>
);

export default Share;

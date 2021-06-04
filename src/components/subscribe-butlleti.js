import React from 'react';
import styled from 'styled-components';

import { PillLinkComposer } from '../styled/link';
import { fluid } from '../utils/fluid';
import { FlexCenter } from '../utils/containers';

import ButlletiSvg from '../../content/assets/butlleti.svg';

// Styled Components

const NewsletterContainer = styled(FlexCenter)`
  max-width: 327px;
  // Margin from adjacent-posts.js
  margin-block-start: 48px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: ${fluid(408, 492)};
    // Margin from adjacent-posts.js
    margin-block-start: ${fluid(64, 96)};
  }
`;

const ButlletiForm = styled.form`
  // Margin from ButlletiSvg and footer.js
  margin: 32px 0px;

  @media (min-width: 768px) {
    // Margin from ButlletiSvg and footer.js
    margin: ${fluid(32, 48)} 0px ${fluid(48, 64)};
  }
`;

const ButlletiInput = styled.input`
  width: 279px;
  height: 48px;
  padding: 8px 24px;
  border: none;
  border-radius: 32px;
  margin-bottom: 16px;
  outline: none;

  &:last-child {
    color: var(--white);
    background-color: var(--darkBlue);
  }

  @media (min-width: 768px) {
    width: ${fluid(360, 420)};
    height: ${fluid(48, 64)};
    padding: 8px ${fluid(24, 36)};
    border-radius: ${fluid(36, 48)};
    margin-bottom: ${fluid(16, 32)};
  }
`;

// Main Components

const SubscribeButlleti = () => {
  return (
    <NewsletterContainer>
      <ButlletiSvg />
      <ButlletiForm>
        <ButlletiInput
          type="text"
          name="name"
          id="name"
          placeholder="El teu nom"
          autocomplete="false"
          minlength="4"
          required
        />
        <ButlletiInput
          type="email"
          name="email"
          id="email"
          placeholder="El teu correu"
          autocomplete="off"
          minlength="8"
          required
        />
        <ButlletiInput type="submit" value="Subscriu-te al butlletí" />
      </ButlletiForm>
    </NewsletterContainer>
  );
};

export default SubscribeButlleti;

import React, { useState } from 'react';
import styled from 'styled-components';

import { fluid } from '../utils/fluid';
import { FlexCenter } from '../utils/containers';

import ButlletiSvg from '../../content/assets/butlleti.svg';

// Styled Components

const NewsletterContainer = styled(FlexCenter)`
  max-width: 327px;
  // Margin from adjacent-posts.js
  margin-block-start: 32px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: ${fluid(408, 492)};
    // Margin from adjacent-posts.js
    margin-block-start: ${fluid(32, 64)};
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

  &:last-child {
    color: var(--white);
    background-color: var(--darkBlue);
    // Additional margin for the button
    margin-top: 8px;
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    width: ${fluid(360, 420)};
    height: ${fluid(48, 64)};
    padding: 8px ${fluid(24, 36)};
    border-radius: ${fluid(32, 48)};
    margin-bottom: ${fluid(16, 32)};

    &:last-child {
      // Additional margin for the button
      margin-top: ${fluid(8, 16)};
    }
  }
`;

// Main Components

const SubscribeButlleti = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // this.loading = true;
      const result = await fetch(
        'https://safareig.ghost.io/members/api/send-magic-link/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            emailType: 'subscribe',
          }),
        }
      );
      const r = await result.text();
      if (r !== 'Created.') alert('bad');
    } catch (error) {
      console.error(error);
    } finally {
      // this.loading = false;
    }
  };

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
          // minlength="4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <ButlletiInput
          type="email"
          name="email"
          id="email"
          placeholder="El teu correu"
          autocomplete="off"
          // minlength="8"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ButlletiInput
          type="submit"
          value="Subscriu-te al butlletí"
          onClick={handleSubmit}
          disabled={name === '' && email === ''}
        />
      </ButlletiForm>
    </NewsletterContainer>
  );
};

export default SubscribeButlleti;

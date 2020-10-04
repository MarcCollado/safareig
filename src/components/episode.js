import React from "react";
import styled from "styled-components";

import { CardContainer, CallToAction } from "./styled";
import Chevron from "../../content/assets/chevron-right-cta.svg";

// Styled Components

export const EpisodeDate = styled.p`
  font-weight: 600;
  letter-spacing: -0.75px;
  opacity: 0.5;
  color: var(--black);
  /* Reset default agent margin */
  margin-block-end: -0.5rem;
`;

const EpisodeTitle = styled.h2`
  /* Reset default agent margin */
  margin-block-end: 0rem;
`;

const ActionContainer = styled.div`
  /* Display & Box Model */
  margin-bottom: 1.5rem;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  p {
    margin-inline-start: 1.5rem;
    padding: 0rem;
  }
`;

const StyledChevron = styled(Chevron)`
  /* Display & Box Model */
  max-height: 0.75rem;
  margin-inline-start: 0.5rem;
`;

// Components

const Episode = ({ id, date, episodeNumber, title, description }) => (
  <CardContainer
    width={20}
    flexFlow="column nowrap"
    justifyContent="flex-start"
    alignItems="flex-start"
    plain
    color="var(--gray)"
  >
    <EpisodeDate>{date.replace(/-/g, " / ")}</EpisodeDate>
    <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
    <p>{description}</p>
    <ActionContainer>
      <CallToAction>Escolta Episodi</CallToAction>
      <StyledChevron />
    </ActionContainer>
  </CardContainer>
);

export default Episode;

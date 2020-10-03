import React from "react";
import styled from "styled-components";

import { CardContainer, CallToAction } from "./styled";
import ShareIcon from "../../content/assets/share.svg";
import Chevron from "../../content/assets/chevron-right-cta.svg";

// Styled Components

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

const Episode = ({ id, date, title, description }) => (
  <CardContainer width={20} flexFlow="column nowrap" plain color="var(--gray)">
    <p>{date}</p>
    <h2>{title}</h2>
    <p>{description}</p>
    <ActionContainer>
      <CallToAction>Escolta Episodi</CallToAction>
      <StyledChevron />
    </ActionContainer>
  </CardContainer>
);

export default Episode;

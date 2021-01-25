import styled from 'styled-components';

import { fluid } from '../utils/fluid';

export const FlexCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const GlobalContainer = styled(FlexCenter)`
  margin: 24px;

  @media (min-width: 768px) {
    margin: ${fluid(24, 132)};
  }
`;

export const HeaderContainer = styled(FlexCenter)`
  // Up to 576px the container sets its own width
  // and shares width w/ MainContainer
  width: clamp(272px, 100%, 455px);
  margin-block-end: 32px;

  @media (min-width: 768px) {
    width: 100%;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
  }
`;

export const BioContainer = styled.div`
  @media (min-width: 768px) {
    width: clamp(400px, 100%, 730px);
    // 1/2 inner space from CardCover
    margin-inline-end: ${fluid(16, 32)};
  }
`;

export const MainContainer = styled(FlexCenter)`
  // Up to 576px the container sets its own width
  // and shares width w/ HeaderContainer
  width: clamp(272px, 100%, 455px);

  @media (min-width: 768px) {
    width: 100%;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const LeftPanelContainer = styled(FlexCenter)`
  // Cards within the container set container's width
  // w/ the exception of EpisodeCover, that defaults to 100%
  @media (min-width: 768px) {
    margin-inline-end: ${fluid(12, 20)}; // 1/2 space from EpisodesContainer
  }
`;

export const EpisodesContainer = styled(FlexCenter)`
  // Cards within the container set container's width
  @media (min-width: 768px) {
    margin-inline-start: ${fluid(12, 20)}; // 1/2 space from LeftPanelContainer
  }
`;

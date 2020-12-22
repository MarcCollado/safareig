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
    margin: ${fluid(32, 112)};
  }
`;

export const HeaderContainer = styled(FlexCenter)`
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
  width: clamp(272px, 100%, 455px);

  @media (min-width: 768px) {
    width: 100%;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const LeftPanelContainer = styled(FlexCenter)`
  @media (min-width: 768px) {
    width: clamp(279px, 100%, 389px);
    // 1/2 space from EpisodeContainer
    margin-inline-end: ${fluid(12, 22)};
  }
`;

export const EpisodesContainer = styled(FlexCenter)`
  @media (min-width: 768px) {
    width: clamp(401px, 100%, 746px);
    // 1/2 inner space from LeftPanelContainer
    margin-inline-start: ${fluid(12, 22)};
  }
`;

import styled from 'styled-components';
import { FlexCenter } from '../components/styled';
import { fluid } from '../utils/fluid';

export const GlobalContainer = styled(FlexCenter)`
  margin: 1.5rem;

  @media (min-width: 768px) {
    margin: ${fluid(32, 112)};
  }
`;

export const HeaderContainer = styled(FlexCenter)`
  margin-block-end: 2rem;

  @media (min-width: 768px) {
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
  }
`;

export const MainContainer = styled(FlexCenter)`
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const LeftPanelContainer = styled(FlexCenter)`
  @media (min-width: 768px) {
    min-width: 280px;
    // 1/2 space from DesktopEpisodeContainer
    margin-inline-end: ${fluid(12, 22)};
    display: block;
  }
`;

export const MobileEpisodesContainer = styled(FlexCenter)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopEpisodesContainer = styled(FlexCenter)`
  display: none;

  @media (min-width: 768px) {
    // 1/2 inner space from LeftPanelContainer
    margin-inline-start: ${fluid(12, 22)};
    display: block;
  }
`;

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

export const BioContainer = styled.div`
  width: clamp(272px, 100%, 455px);

  @media (min-width: 768px) {
    width: clamp(400px, 100%, 730px);
    // 1/2 inner space from CardCover
    margin-inline-end: ${fluid(16, 32)};
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
    // 1/2 space from EpisodeContainer
    margin-inline-end: ${fluid(12, 22)};
  }
`;

export const EpisodesContainer = styled(FlexCenter)`
  @media (min-width: 768px) {
    // 1/2 inner space from LeftPanelContainer
    margin-inline-start: ${fluid(12, 22)};
  }
`;

export const FeaturedLinkContainer = styled.div`
  // make some room at both ends for the hover
  padding-inline-start: 12px;
  padding-inline-end: 12px;
  border-radius: 1rem;
  margin-inline-start: -12px;
  margin-inline-end: -12px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: all 250ms ease-in-out;

  & p {
    margin-block-start: 12px;
    margin-block-end: 12px;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    &:hover {
      background-color: ${(props) =>
        props.flat ? 'var(--white)' : 'var(--gray)'};
    }
  }
`;

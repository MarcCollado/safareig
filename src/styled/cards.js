import styled from 'styled-components';

import { FlexCenter } from '../utils/containers';
import { fluid } from '../utils/fluid';

// Contains the SVG icon and the h2
export const CardTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-self: flex-start;
  margin-block-end: -6px; // Reset default p block-start margin

  & svg {
    width: 28px;
    margin-inline-end: 12px; // Separate icon from the h2
  }

  @media (min-width: 768px) {
    flex-flow: column nowrap; // Display icon on top of h2
    align-items: flex-start;

    & svg {
      width: ${fluid(28, 36)};
      margin-block-end: ${fluid(16, 20)};
    }
  }
`;

export const InnerCardContainer = styled.div`
  margin: 24px;

  @media (min-width: 768px) {
    margin: ${fluid(24, 36)};
  }
`;

export const Card = styled(FlexCenter)`
  border-radius: ${fluid(24, 32)};
  margin-block-end: 24px;
  background-color: ${(props) => (props.flat ? 'var(--gray)' : 'var(--white)')};
  box-shadow: ${(props) =>
    props.flat || props.down ? 'none' : 'var(--boxShadow)'};
  position: ${(props) => (props.flat || props.down ? 'static' : 'relative')};
  z-index: ${(props) => (props.flat || props.down ? 1 : 999)};
  transition: all 300ms ease;

  @media (min-width: 768px) {
    margin-block-end: ${fluid(24, 48)};
  }
`;

// Used by share.js, press.js
export const FlatCard = styled(Card)`
  background-color: var(--gray);
  box-shadow: none;

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--white);

      & div svg:last-child {
        transform: translate3d(4px, 0px, 0px);
      }
    }
  }
`;

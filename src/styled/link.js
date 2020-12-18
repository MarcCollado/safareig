import styled from 'styled-components';

import { fluid } from '../utils/fluid';

// Blue links w/ SVG arrows
export const SimpleLinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  & > svg {
    height: auto;
    width: 5px;
    margin-block-start: 2px;
    margin-inline-start: ${fluid(8, 12)};
    transition: all 250ms ease-in-out;

    path {
      stroke-width: 4;
    }
  }

  @media (min-width: 768px) {
    & > svg {
      width: 6px;
    }

    &:hover > svg {
      transform: translateX(4px);
    }
  }
`;

// Text inside SimpleLinkContainer
export const SimpleLink = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  color: var(--darkBlue);

  @media (min-width: 768px) {
    font-size: ${fluid(16, 20)};
  }
`;

// Special CTAs for cards — separated from main content
export const CardLinkContainer = styled(SimpleLinkContainer)`
  padding-block-start: ${fluid(12, 16)};
`;

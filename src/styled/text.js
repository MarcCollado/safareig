import styled from 'styled-components';

// Shared w/ bio.js && bugada.js
export const HeaderDescription = styled.p`
  // correct for <p> default block margin
  margin-block-start: 12px;
  margin-block-end: 24px;
  font-size: 17px;

  @media (min-width: 576px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
  }
`;

import React from 'react';
import styled from 'styled-components';

import BlueChevron from '../../content/assets/chevron-blue.svg';
import GrayChevron from '../../content/assets/chevron-gray.svg';
import BlackChevron from '../../content/assets/chevron-black.svg';

const Chevron = ({ color }) => {
  switch (color) {
    case 'gray':
      return <GrayChevron />;
    case 'black':
      return <BlackChevron />;
    default:
      return <BlueChevron />;
  }
};

const styledChevron = styled(Chevron)`
  // Chevron svg styles controlled through Featured & Simple LinkContainer
`;

export default styledChevron;

import React from 'react';
import styled from 'styled-components';

import BlueChevron from '../../content/assets/chevron-blue.svg';
import GrayChevron from '../../content/assets/chevron-gray.svg';

const Chevron = ({ color }) => {
  return color === 'blue' ? <BlueChevron /> : <GrayChevron />;
};

const styledChevron = styled(Chevron)``;

export default styledChevron;

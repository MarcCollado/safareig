import React from 'react';
import styled from 'styled-components';

// import { fluid } from '../utils/fluid';
import BlueChevron from '../../content/assets/chevron-right-cta.svg';
import GrayChevron from '../../content/assets/chevron-right.svg';

const Chevron = ({ color }) => {
  return color === 'blue' ? <BlueChevron /> : <GrayChevron />;
};

const styledChevron = styled(Chevron)``;

export default styledChevron;

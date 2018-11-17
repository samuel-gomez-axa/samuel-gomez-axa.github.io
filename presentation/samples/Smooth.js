import React from 'react';
import { Slide, Heading } from 'spectacle';

const Smooth = () => (
  <Slide transition={['slide', 'spin']} bgColor="primary">
    <Heading caps fit size={1} textColor="tertiary">
      Smooth
    </Heading>
    <Heading caps fit size={1} textColor="secondary">
      Combinable Transitions
    </Heading>
  </Slide>
);

export default Smooth;

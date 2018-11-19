import React from 'react';

import { Slide, ComponentPlayground } from 'spectacle';

const ComponentPlay = () => (
  <Slide goTo={3}>
    <ComponentPlayground theme="dark" />
  </Slide>
);

export default ComponentPlay;

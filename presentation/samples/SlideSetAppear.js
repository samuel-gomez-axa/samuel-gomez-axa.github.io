import React from 'react';
import Interactive from '../../assets/code/interactive';
import { List, Slide, Appear, ListItem, SlideSet, Heading } from 'spectacle';

const SlideSetAppear = () => (
  <SlideSet>
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={1} caps fit textColor="tertiary">
        First slide
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="primary">
      <Heading size={1} caps fit textColor="tertiary">
        Your presentations are interactive
      </Heading>
      <Interactive />
    </Slide>
  </SlideSet>
);

export default SlideSetAppear;

import React from 'react';
import { Slide, CodePane, Heading } from 'spectacle';

const withCode = () => (
  <Slide
    transitionIn={['zoom', 'fade']}
    transitionOut={['slide', 'fade']}
    bgColor="primary"
    notes="<ul><li>talk about that</li><li>and that</li></ul>"
  >
    <Heading size={1} caps lineHeight={1} textColor="black">
      BEM
    </Heading>
    <Heading size={4} caps lineHeight={1} textColor="white">
      Block Element Modifier
    </Heading>
    <CodePane
      lang="sass"
      source={require('raw-loader!../../assets/code/bem.style')}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>
);

export default withCode;

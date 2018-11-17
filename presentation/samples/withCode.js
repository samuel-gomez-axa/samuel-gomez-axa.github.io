import React from 'react';
import { Slide, CodePane } from 'spectacle';

const withCode = () => (
  <Slide
    transitionIn={['zoom', 'fade']}
    transitionOut={['slide', 'fade']}
    bgColor="primary"
    notes="<ul><li>talk about that</li><li>and that</li></ul>"
  >
    <CodePane
      lang="jsx"
      source={require('raw-loader!../../assets/code/deck.example')}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>
);

export default withCode;

import React from 'react';
import { BlockQuote, Quote, Slide, Cite } from 'spectacle';

const WithBlockQuote = () => (
  <Slide transition={['slide']} bgColor="black">
    <BlockQuote>
      <Quote>Un pack de br, svp !</Quote>
      <Cite>Emeric Pandelle Perrin</Cite>
    </BlockQuote>
  </Slide>
);

export default WithBlockQuote;

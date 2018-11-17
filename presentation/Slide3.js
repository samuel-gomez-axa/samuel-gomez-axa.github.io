import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link,
  CodePane
} from 'spectacle';

const Slide3 = () => (
  <Slide transition={['fade']} bgDarken={0.7}>
    <CodePane
      lang="jsx"
      source={require('raw-loader!../assets/code/deck.example')}
      margin="20px auto"
      overflow="overflow"
    />
  </Slide>
);

export default Slide3;

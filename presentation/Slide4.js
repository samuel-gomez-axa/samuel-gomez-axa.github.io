import React from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from 'spectacle';

const Slide4 = () => (
  <SlideSet>
    <Slide transition={['slide']}>
      <Appear fid="1">
        <Heading size={1} caps fit>
          Full Width
        </Heading>
      </Appear>
      <Appear fid="2">
        <Heading size={1} caps fit>
          Adjustable Darkness
        </Heading>
      </Appear>
      <Appear fid="3">
        <Heading size={1} caps fit>
          Background Imagery
        </Heading>
      </Appear>
    </Slide>
    <Slide transition={['slide']}>
      <Appear fid="1">
        <Heading size={1} caps fit>
          Full Width
        </Heading>
      </Appear>
      <Appear fid="2">
        <Heading size={1} caps fit>
          Adjustable Darkness
        </Heading>
      </Appear>
      <Appear fid="3">
        <Heading size={1} caps fit>
          Background Imagery
        </Heading>
      </Appear>
    </Slide>
  </SlideSet>
);

export default Slide4;

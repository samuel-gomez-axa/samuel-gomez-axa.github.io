import React from 'react';
import { Heading, Slide, Markdown } from 'spectacle';
import markdown from '../../assets/images/markdown.png';

const WithMarkdown = () => (
  <Slide
    transition={['spin', 'zoom']}
    bgColor="tertiary"
    controlColor="primary"
    progressColor="primary"
  >
    <Heading caps fit size={1} textColor="primary">
      Inline Markdown
    </Heading>
    <Markdown>
      {`
![Markdown Logo](${markdown.replace('/', '')})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
* Add some \`inline code\` to your sldes!
    `}
    </Markdown>
  </Slide>
);

export default WithMarkdown;

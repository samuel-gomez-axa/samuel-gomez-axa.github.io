import React from 'react';
import { Deck, MarkdownSlides, SlideSet } from 'spectacle';
const WithMarkdownSlides = ({ theme }) => (
  <>{MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}</>
);

export default WithMarkdownSlides;

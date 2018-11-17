import React, { Component } from 'react';

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
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

//require('normalize.css');
import 'normalize.css/normalize.css';
import city from '../assets/images/city.jpg';

const theme = createTheme({
  primary: '#61dafb'
});

import Simple from './samples/simple';
import WithCode from './samples/withCode';
import WithSpeakerNotes from './samples/withSpeakerNotes';
import ComponentPlay from './samples/ComponentPlayground';
import Appears from './samples/Appears';
import Animation from './samples/Animation';
import WithGotoAction from './samples/WithGotoAction';
import AppearsState from './samples/AppearsState';
import WithLayout from './samples/WithLayout';
import WithBlockQuote from './samples/WithBlockQuote';
import WithMarkdown from './samples/WithMarkdown';
import WithMarkdownSlides from './samples/WithMarkdownSlides';
import SlideSetAppear from './samples/SlideSetAppear';
import Smooth from './samples/Smooth';
import TableLayout from './samples/TableLayout';
import Simple2 from './samples/Simple2';
import Speaker from './Slide1';

import sam from '../assets/images/samuel.png';
import sambg from '../assets/images/site-samuel.png';
import axa from '../assets/images/logo-axa.svg';

import gui from '../assets/images/guillaume.jpg';
import guibg from '../assets/images/site-gui.png';

export default class Presentation extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      steps: 0
    };
    this.updateSteps = this.updateSteps.bind(this);
  }

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Speaker
          name="Samuel Gomez"
          job="Software Engineer Senior"
          company="Axa"
          avatar={sam}
          website="https://www.samuelgomez.fr"
          companyIcon={axa}
          bg={sambg}
          twitter="gamuez"
        />
        <Speaker
          name="Guillaume Chervet"
          job="Software Engineer Senior"
          company="Axa"
          avatar={gui}
          website="https://www.guillaume-chervet.fr/"
          companyIcon={axa}
          bg={guibg}
          twitter="guichervet"
        />
        <Simple />
        <WithCode />
        <WithSpeakerNotes />
        <ComponentPlay />
        <AppearsState />
        <WithGotoAction theme={theme} />
        <Slide
          transition={['slide']}
          bgImage={city.replace('/', '')}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <WithLayout />
        <WithBlockQuote />
        <WithMarkdown />
        <Smooth />
        <TableLayout />
        <Simple2 />
        <CodeSlide
          transition={['fade']}
          lang="jsx"
          textSize=".6em"
          code={require('raw-loader!../assets/code/controller.basic')}
          ranges={[
            {
              loc: [0, 7],
              title: '@Decorators FTW'
            },
            {
              loc: [8, 10],
              title: "Controller's class declaration",
              note: 'https://app/call-for-papers/*'
            },
            {
              loc: [11, 15],
              title: 'HTTP GET route',
              note: 'GET https://app/call-for-papers/{id}'
            },
            {
              loc: [16, 20],
              title: 'HTTP POST route with a @Body',
              note: "Request's body is extracted in createCFP"
            }
          ]}
        />
      </Deck>
    );
  }
}

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
  GoToAction,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

//require('normalize.css');
import 'normalize.css/normalize.css';
import city from '../assets/images/city.jpg';

const theme = createTheme({
  primary: '#61dafb',
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
import Speaker from './Speaker';

import sam from '../assets/images/samuel.png';
import sambg from '../assets/images/site-samuel.png';
import axa from '../assets/images/logo-axa.svg';

import gui from '../assets/images/guillaume.jpg';
import guibg from '../assets/images/site-gui.png';
import Retro from './Retro';

import jquery from '../assets/images/jquery.svg';
import css3 from '../assets/images/css3.svg';
import react from '../assets/images/reactjs.svg';
import sass from '../assets/images/sass.svg';
import angular from '../assets/images/angularjs.svg';
import bootstrap from '../assets/images/bootstrap.svg';
import bem from '../assets/images/bem.svg';
import question from '../assets/images/question.svg';

import atom from '../assets/images/atoms.svg';
import molecules from '../assets/images/molecules.svg';
import organism from '../assets/images/organism.svg';
import template from '../assets/images/template.svg';
import pages from '../assets/images/pages.svg';

export default class Presentation extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      steps: 0,
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
          github="samuel-gomez"
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
          github="guillaumechervet"
        />
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="black">
            Retro
          </Heading>
          <Layout>
            <Fill className="retro__fill">
              <Image className="retro__img" src={jquery} width={60} />
              <Image className="retro__img" width={60} src={css3} />
              <Image className="retro__img" width={60} src={bootstrap} />
              <Heading
                size={6}
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Jquery / CSS / Bootstrap
              </Heading>
            </Fill>
            <Fill className="retro__fill">
              <Image className="retro__img" src={angular} width={60} />
              <Image className="retro__img" width={60} src={css3} />
              <Image className="retro__img" width={60} src={bootstrap} />
              <Heading
                size={6}
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Angularjs / CSS / Bootstrap
              </Heading>
            </Fill>
            <Fill className="retro__fill retro__fill--actual">
              <div className="retro__fill-part">
                <Image className="retro__img" src={react} width={60} />
                <Image className="retro__img" src={question} width={60} />
                <Heading
                  size={6}
                  textColor="secondary"
                  bgColor="white"
                  margin={10}
                >
                  React / ?
                </Heading>
              </div>
              <div className="retro__fill-part">
                <Image className="retro__img" width={60} src={sass} />
                <Image className="retro__img" width={60} src={bem} />
                <Heading size={6} textColor="secondary" margin={10}>
                  HTML / SASS / BEM
                </Heading>
              </div>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="black">
            Design System
          </Heading>
          <Layout>
            <Fill>
              <Image src={atom} height={130} />
              <Heading
                size={6}
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Atoms
              </Heading>
            </Fill>
            <Fill>
              <Image src={molecules} height={130} />
              <Heading
                size={6}
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Molecules
              </Heading>
            </Fill>
            <Fill>
              <Image src={organism} height={130} />
              <Heading
                size={6}
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Organism
              </Heading>
            </Fill>
            <Fill>
              <Image src={template} height={130} />
              <Heading
                size={6}
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Templates
              </Heading>
            </Fill>
            <Fill>
              <Image src={pages} height={130} />
              <Heading
                size={6}
                textColor="secondary"
                bgColor="white"
                margin={10}
                height
              >
                Pages
              </Heading>
            </Fill>
          </Layout>
        </Slide>

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
              title: '@Decorators FTW',
            },
            {
              loc: [8, 10],
              title: "Controller's class declaration",
              note: 'https://app/call-for-papers/*',
            },
            {
              loc: [11, 15],
              title: 'HTTP GET route',
              note: 'GET https://app/call-for-papers/{id}',
            },
            {
              loc: [16, 20],
              title: 'HTTP POST route with a @Body',
              note: "Request's body is extracted in createCFP",
            },
          ]}
        />
      </Deck>
    );
  }
}

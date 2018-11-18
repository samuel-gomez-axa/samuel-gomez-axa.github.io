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
  third: '#49d295',
  fourth: '#FF637E',
  other: '#BB84FF',
});

import Speaker from './Speaker';

import sam from '../assets/images/samuel.png';
import sambg from '../assets/images/site-samuel.png';
import axa from '../assets/images/logo-axa.svg';

import gui from '../assets/images/guillaume.jpg';
import guibg from '../assets/images/site-gui.png';

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
import lerna from '../assets/images/lerna.jpg';
import npm from '../assets/images/npm.svg';

import notedesign from './notes/notedesign';
import notebem from '../assets/notes/notebem';
import notetoolkit from '../assets/notes/notetoolkit';
import notelerna from '../assets/notes/notelerna';
import notelivecode from '../assets/notes/notelivecode';

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
        <Slide
          transition={['zoom', 'fade']}
          bgColor="other"
          notes={notetoolkit}
        >
          <Heading size={1} caps lineHeight={1} textColor="black">
            Retro
          </Heading>
          <Layout>
            <Appear fid="1">
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
            </Appear>
            <Appear fid="2">
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
            </Appear>
            <Appear fid="3">
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
            </Appear>
          </Layout>
        </Slide>

        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          notes={notedesign}
        >
          <Heading size={1} caps lineHeight={1} textColor="black">
            Design System
          </Heading>
          <Heading size={4} caps lineHeight={1} textColor="white">
            avec l'Atomic Design
          </Heading>
          <Layout>
            <Appear fid="1">
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
            </Appear>
            <Appear fid="2">
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
            </Appear>
            <Appear fid="3">
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
            </Appear>
            <Appear fid="4">
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
            </Appear>
            <Appear fid="5">
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
            </Appear>
          </Layout>
        </Slide>

        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="fourth"
          notes={notebem}
        >
          <Heading size={1} caps lineHeight={1} textColor="black">
            BEM
          </Heading>
          <Heading size={4} caps lineHeight={1} textColor="white">
            Block Element Modifier
          </Heading>
          <CodePane
            lang="sass"
            source={require('raw-loader!../assets/code/bem.style')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={['zoom']} bgColor="primary" notes={notelerna}>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Lerna & NPM
          </Heading>
          <Heading size={1} fit caps>
            Monorepo et packages
          </Heading>
          <Image src={lerna} />
          <Image src={npm} />
        </Slide>

        <Slide transition={['spin']} bgColor="third" notes={notelivecode}>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Live Coding
          </Heading>
          <Heading size={1} fit caps>
            Part 1 : Installation, mise en place et première page
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Open source !
          </Heading>
          <List>
            <ListItem>
              <Link
                textColor="black"
                href="https://www.npmjs.com/search?q=%40axa-fr%2Freact-toolkit"
              >
                Package NPM
              </Link>
            </ListItem>
            <ListItem>
              <Link
                textColor="black"
                href="https://github.com/AxaGuilDEv/react-toolkit"
              >
                Github
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Merci !
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

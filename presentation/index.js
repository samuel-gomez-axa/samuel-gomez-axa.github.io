import React, { Component } from 'react';

import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import 'normalize.css/normalize.css';

const theme = createTheme({
  primary: '#61dafb',
  third: '#49d295',
  fourth: '#FF637E',
  other: '#BB84FF'
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
import corecss from '../assets/images/corecss.png';
import storybook from '../assets/images/storybook.png';

import atom from '../assets/images/atoms.svg';
import molecules from '../assets/images/molecules.svg';
import organism from '../assets/images/organism.svg';
import template from '../assets/images/template.svg';
import pages from '../assets/images/pages.svg';
import lerna from '../assets/images/lerna.jpg';
import npm from '../assets/images/npm.svg';

import notedesign from '../assets/notes/notedesign';
import notebem from '../assets/notes/notebem';
import notetoolkit from '../assets/notes/notetoolkit';
import notelerna from '../assets/notes/notelerna';
import notelivecode from '../assets/notes/notelivecode';
import notemerci from '../assets/notes/notemerci';

export default () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide className="splash" transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="black">
        Tout savoir sur le Web Toolkit Axa
      </Heading>
      <Layout>
        <Fill className="splash__part">
          <Image className="splash__img" src={storybook} />
        </Fill>
        <Fill className="splash__part">
          <Image className="splash__img" src={corecss} />
        </Fill>
      </Layout>
    </Slide>
    <Speaker
      name="Samuel Gomez"
      job="Lead Front-end"
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
      job="TechLeader"
      company="Axa"
      avatar={gui}
      website="https://www.guillaume-chervet.fr"
      companyIcon={axa}
      bg={guibg}
      twitter="guichervet"
      github="guillaumechervet"
    />
    <Slide
      className="retro"
      transition={['zoom', 'fade']}
      bgColor="other"
      notes={notetoolkit}
    >
      <Heading caps size={2} margin={10}>
        Retro Toolkit
      </Heading>
      <Layout>
        <Appear fid="1">
          <Fill className="retro__fill">
            <Heading
              className="retro__title"
              size={4}
              textColor="secondary"
              margin={10}
            >
              Toolkit V1
            </Heading>
            <div className="retro__img-container">
              <Image className="retro__img" src={jquery} width={60} />
              <Image className="retro__img" width={60} src={css3} />
              <Image className="retro__img" width={60} src={bootstrap} />
              <Image className="retro__img" src={angular} width={60} />
            </div>
            <Heading size={6} textColor="secondary" margin={20}>
              Jquery / CSS / Bootstrap / AngularJs
            </Heading>
            <List className="retro__list">
              <ListItem>Gain de temps sur les projets</ListItem>
              <ListItem>Homogénéisation graphiques et fonctionnelle</ListItem>
              <ListItem>Code spaguetti</ListItem>
            </List>
          </Fill>
        </Appear>
        <Appear fid="2">
          <Fill className="retro__fill">
            <Heading
              className="retro__title"
              size={4}
              textColor="secondary"
              margin={10}
            >
              Toolkit V2
            </Heading>
            <div className="retro__img-container">
              <Image className="retro__img" src={angular} width={60} />
              <Image className="retro__img" width={60} src={css3} />
              <Image className="retro__img" width={60} src={bootstrap} />
            </div>
            <Heading size={6} textColor="secondary" margin={10}>
              Angularjs / SASS / Bootstrap
            </Heading>
            <List className="retro__list">
              <ListItem>Fork de AngularStrap</ListItem>
              <ListItem>Prémisses d'un design system</ListItem>
              <ListItem>Form Generator</ListItem>
            </List>
          </Fill>
        </Appear>
        <Appear fid="3">
          <Fill className="retro__fill retro__fill--actual">
            <Heading
              className="retro__title"
              size={4}
              textColor="secondary"
              margin={10}
            >
              Toolkit V3
            </Heading>
            <div className="retro__fill-part">
              <Image className="retro__img" src={react} width={60} />
              <Image className="retro__img" src={question} width={60} />
              <Heading size={6} textColor="secondary" margin={10}>
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
            <List className="retro__list">
              <ListItem>Framework JS Agnostique</ListItem>
              <ListItem>Séparation en 2 cores</ListItem>
              <ListItem>Multipackages</ListItem>
              <ListItem>Gain de 40%</ListItem>
            </List>
          </Fill>
        </Appear>
      </Layout>
    </Slide>

    <Slide transition={['zoom', 'fade']} bgColor="primary" notes={notedesign}>
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
            <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
              Atoms
            </Heading>
          </Fill>
        </Appear>
        <Appear fid="2">
          <Fill>
            <Image src={molecules} height={130} />
            <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
              Molecules
            </Heading>
          </Fill>
        </Appear>
        <Appear fid="3">
          <Fill>
            <Image src={organism} height={130} />
            <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
              Organism
            </Heading>
          </Fill>
        </Appear>
        <Appear fid="4">
          <Fill>
            <Image src={template} height={130} />
            <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
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
      <Heading size={6} lineHeight={1} textColor="white">
        .block__element--modifier
      </Heading>
      <List>
        <ListItem>
          <b>C'est quoi</b> : C'est une convention de nommage
        </ListItem>
        <ListItem>
          <b>Pourquoi</b> : le cascading amène à des selecteurs illisibles :
          <Heading size={6} lineHeight={1} textColor="white">
            div#wall .parent #tag-5.slick
          </Heading>
        </ListItem>
        <ListItem>
          <b>Pourquoi pas PostCSS </b> : Scope fort, rend difficile le
          cascading, class CSS générée non lisibles.
        </ListItem>
        <ListItem>
          <b>Avantages</b> :
          <List>
            <ListItem>
              Assure la portabilité, ré-utilisation Isolation forte
            </ListItem>
            <ListItem>Permet de quand même du cascading</ListItem>
            <ListItem>Classes CSS lisibles par l'humain </ListItem>
          </List>
        </ListItem>
      </List>
    </Slide>

    <Slide transition={['zoom']} bgColor="primary" notes={notelerna}>
      <Heading size={3} caps lineHeight={1} textColor="black">
        Lerna et NPM
      </Heading>
      <Heading size={4} caps textColor="white">
        Monorepo et packages
      </Heading>
      <Layout>
        <Fill>
          <Image src={lerna} />
        </Fill>
        <Fill>
          <Image src={npm} width={300} />
        </Fill>
      </Layout>

      <List>
        <ListItem>
          <b>C'est quoi</b> : Créer du multipackage en un seul repo
        </ListItem>
        <ListItem>
          <b>Pourquoi</b> : Installation globale ou indépendante des packages,
          bundle optimisé
        </ListItem>
        <ListItem>
          <b>Avantages</b> : Maintenance et évolution des composants
          indépendantes
        </ListItem>
      </List>
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
            Repo Github
          </Link>
        </ListItem>
        <ListItem>
          <Link textColor="black" href="https://axaguildev.github.io/">
            Github AxaGuilDev
          </Link>
        </ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="white" notes={notemerci}>
      <Heading size={1} fit caps lineHeight={1} textColor="black">
        Merci !
      </Heading>
    </Slide>
  </Deck>
);

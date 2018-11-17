import React from 'react';
import { Heading, Link, Slide, Text, Fill, Layout, Image } from 'spectacle';
import jquery from '../assets/images/jquery.svg';
import css3 from '../assets/images/css3.svg';
import react from '../assets/images/reactjs.svg';
import sass from '../assets/images/sass.svg';
import angular from '../assets/images/angularjs.svg';
import bootstrap from '../assets/images/bootstrap.svg';
import html5 from '../assets/images/html5.svg';

const Retro = () => (
  <Slide transition={['zoom', 'fade']} bgColor="primary">
    <Heading size={1} caps lineHeight={1} textColor="black">
      Retro
    </Heading>
    <Layout>
      <Fill>
        <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
          <Image src={jquery} width={100} /> <Image width={100} src={css3} />
          Jquery / CSS / Bootstrap
        </Heading>
      </Fill>
      <Fill>
        <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
          <Image src={angular} width={100} />
          <Image width={100} src={bootstrap} />
          Angularjs / CSS / Bootstrap
        </Heading>
      </Fill>
      <Fill>
        <Heading size={6} textColor="secondary" bgColor="white" margin={10}>
          <Image src={react} width={100} />
          <Image width={100} src={sass} />
          React / HTML / SASS / BEM
        </Heading>
      </Fill>
    </Layout>
  </Slide>
);

export default Retro;

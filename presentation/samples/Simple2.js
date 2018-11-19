import React from 'react';
import { Slide, Heading, Link, Image } from 'spectacle';
import logo from '../../assets/images/formidable-logo.svg';
const Simple2 = () => (
  <Slide transition={['spin', 'slide']} bgColor="tertiary">
    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
      Made with love in Seattle by
    </Heading>
    <Link href="http://www.formidable.com">
      <Image width="100%" src={logo} />
    </Link>
  </Slide>
);

export default Simple2;

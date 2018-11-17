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
  Link
} from 'spectacle';

const Slide2 = () => (
  <Slide transition={['fade']} bgDarken={0.7}>
    <Heading size={2} fit caps lineHeight={1} textColor="secondary">
      Samuel Gomez
    </Heading>
    <Text textColor="quaternary" textSize="2em" margin="30px 0 0 0">
      💼 Software Engineer Senior
    </Text>

    <Text textColor="quaternary" textSize="2em" margin="10px 0 0 0">
      ❤ development, sport 🚴⚽️, billard 🎱 , café :coffee:
    </Text>
    <Text textColor="quaternary" textSize="2em" margin="10px 0 0 0">
      <List>
        <ListItem>
          <Link
            href="https://www.samuelgomez.fr"
            target="blank"
            title="Aller sur samuelgomez.fr"
          >
            🌐 Site Web samuelgomez.fr
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.samuelgomez.fr"
            target="blank"
            title="Aller sur le Twitter de Samuel Gomez"
          >
            🌐 Twitter samuelgomez.fr
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.samuelgomez.fr"
            target="blank"
            title="Aller sur le linkedIn de Samuel Gomez"
          >
            :octocat: Github samuelgomez.fr
          </Link>
        </ListItem>
      </List>
    </Text>
  </Slide>
);

export default Slide2;

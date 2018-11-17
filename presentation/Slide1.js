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
import './style.scss';

const Speaker = ({
  name,
  job,
  company,
  companyIcon,
  avatar,
  skills,
  bg,
  website,
  twitter
}) => (
  <Slide transition={['zoom']} bgImage={bg} bgDarken={0.75}>
    <Heading size={1} caps textColor="primary">
      {name}
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      {job} chez {company}
    </Text>
    <div className="speaker">
      <Image
        className="speaker__company-icon"
        src={companyIcon}
        alt={companyIcon}
        width={50}
      />
      <div className="speaker__avatar-border" />
      <Image
        className="speaker__avatar"
        src={avatar}
        alt={avatar}
        width={180}
      />
    </div>

    <List>
      <ListItem>
        {website && (
          <Link title={`Go to ${website}`} target="blank" href={website}>
            Site Web
          </Link>
        )}
        {twitter && (
          <Link
            title={`Go to http://twitter.com/${twitter}`}
            target="blank"
            href={`http://twitter.com/${twitter}`}
          >
            @{twitter}
          </Link>
        )}
      </ListItem>
    </List>
  </Slide>
);

export default Speaker;

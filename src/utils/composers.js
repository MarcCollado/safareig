import React from 'react';
import { Link } from 'gatsby';

import { FeaturedLinkComposer } from '../styled/link';

// id must match its correspondent GraphQL query name
export const hosts = [
  {
    id: 'Marc',
    name: 'Marc Collado',
    handle: '@marccollado',
  },
  {
    id: 'Ramon',
    name: 'Ramon Gilabert',
    handle: '@ramongilabert',
  },
  {
    id: 'Safareig',
    name: 'Safareig',
    handle: '@safareigfm',
  },
];

export const podcasts = [
  {
    id: 'ApplePodcasts',
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/es/podcast/safareig/id1539383682',
  },
  {
    id: 'GooglePodcasts',
    name: 'Google Podcasts',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL3NhZmFyZWlnL2ZlZWQueG1s',
  },
  {
    id: 'Spotify',
    name: 'Spotify',
    url: 'https://open.spotify.com/show/40BN4LoFtYR6Co15UbAPXf',
  },
  {
    id: 'Overcast',
    name: 'Overcast',
    url: 'https://overcast.fm/itunes1539383682/safareig',
  },
  {
    id: 'PocketCasts',
    name: 'Pocket Casts',
    url: 'https://pca.st/o70v2mv0',
  },
  // {
  //   id: 'Castro',
  //   name: 'Castro',
  //   url: 'https://castro.fm/podcast/03163216-961a-430e-9e4d-a0f1b4a91f93',
  // },
  {
    id: 'RSS',
    name: 'RSS Feed',
    url: 'https://media.rss.com/safareig/feed.xml',
  },
];

export const NavLinks = () => (
  <>
    <Link to="/bugada">
      <FeaturedLinkComposer
        color="black"
        text="Llegeix-nos"
        arrow={false}
        isCard={false}
      />
    </Link>
    <FeaturedLinkComposer
      color="black"
      text="Segueix-nos"
      href="https://www.twitter.com/safareigfm"
      arrow={false}
      isCard={false}
    />
    <FeaturedLinkComposer
      color="black"
      text="Contacta'ns"
      href={'mailto:fem@safareig.fm'}
      arrow={false}
      isCard={false}
    />
  </>
);

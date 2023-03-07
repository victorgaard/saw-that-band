export type UserLink = {
  type:
    | 'spotify'
    | 'youtube'
    | 'deezer'
    | 'apple'
    | 'lastfm'
    | 'setlist'
    | 'soundcloud'
    | 'other';
  url: string;
};

export type User = {
  id: number;
  handle: string;
  createdAt: string;
  name: string;
  lastName: string;
  fullName: string;
  picture: string;
  bio: string;
  links: UserLink[];
};

const user: User = {
  id: 1,
  handle: '@victor',
  createdAt: '2023-02-26T16:11:52Z',
  name: 'Victor',
  lastName: 'Santos',
  fullName: 'Victor Santos',
  picture: '/assets/img/avatar/avatar.jpeg',
  bio: `I'm an optimistic nihilist and lifelong learner who also happens to design and code. Made in Goiânia 🇧🇷 and based in Berlin 🇩🇪`,
  links: [
    {
      type: 'spotify',
      url: 'https://open.spotify.com/user/elvengaard?si=47de00f680484ec1&nd=1'
    },
    {
      type: 'lastfm',
      url: 'https://www.last.fm/user/elvengaard'
    },
    {
      type: 'setlist',
      url: 'https://www.setlist.fm/user/victorgaard'
    },
    {
      type: 'other',
      url: 'https://victorsantos.work'
    }
  ]
};

export default user;

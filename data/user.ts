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
  picture:
    'https://scontent.ftxl3-1.fna.fbcdn.net/v/t39.30808-6/240829340_4581018901932466_2105210795889353802_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wSgWHlN0fXUAX-BQ-qA&_nc_ht=scontent.ftxl3-1.fna&oh=00_AfCL15tSh8tjt6mLmsahhdLmiYVZDNDOq3VPXCzbv-qATQ&oe=63FED06F',
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

export type UserLink = {
  type:
    | 'spotify'
    | 'youtube'
    | 'deezer'
    | 'apple'
    | 'lastfm'
    | 'setlist'
    | 'soundcloud'
    | 'instagram'
    | 'other';
  url: string;
};

export type User = {
  id: string;
  username: string;
  created_at: string;
  name: string;
  picture: string;
  bio: string;
  links: UserLink[];
};

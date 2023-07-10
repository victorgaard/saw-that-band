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
  id: number;
  handle: string;
  created_at: string;
  name: string;
  lastName: string;
  fullName: string;
  picture: string;
  bio: string;
  links: UserLink[];
};

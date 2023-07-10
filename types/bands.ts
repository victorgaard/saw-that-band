export type Concerts = {
  date: string;
  location: string;
};

export type Bands = {
  id: string;
  band: string;
  picture: string;
  genre: string[];
  concerts: Concerts[];
};

export type Note = {
  icon: '';
  message: '';
};

export type Concert = {
  date: string;
  location: string;
  notes?: Note[];
};

export type Band = {
  id: string;
  band: string;
  picture: string;
  genre: string[];
  concerts: Concert[];
};

import { IconName } from '@/app/components/icon/Icon';

export type Note = {
  icon: IconName;
  message: string;
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

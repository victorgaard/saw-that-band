import { createContext } from 'react';

export type CurrentSong = {
  band: string;
  song: string;
  src: string;
  album: string;
  cover: string;
};

type MusicPlayerContextProps = {
  isOpen: boolean;
  getSongToPlay: (token: string, band: string, song: string) => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextProps>({
  isOpen: false,
  getSongToPlay: () => {}
});

export default MusicPlayerContext;

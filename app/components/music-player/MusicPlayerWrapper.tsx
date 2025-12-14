'use client';

import {
  ChangeEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import MusicPlayer from './MusicPlayer';
import MusicPlayerContext, { CurrentSong } from './MusicPlayerContext';
import getSong from '../band-page/utils/getSong';

function MusicPlayerWrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState<CurrentSong>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.15);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function resetStates() {
    setIsOpen(true);
    setIsPlaying(false);
    setCurrentSong(undefined);
    setNotFound(false);
    setError(false);
  }

  function playPause() {
    setIsPlaying(!isPlaying);
  }

  function closePlayer() {
    setIsOpen(false);
  }

  function handleVolume(e: ChangeEvent<HTMLInputElement>) {
    const newVolume = Number(e.target.value) / 100;
    setVolume(newVolume);
  }

  function handleSongEnd() {
    setIsPlaying(false);
  }

  const getSongToPlay = useCallback((band: string, song: string) => {
    resetStates();

    getSong(band, song)
      .then(res => {
        const hasSong = res.total > 0;

        if (hasSong) {
          const newSong: CurrentSong = {
            band: res.data[0].artist.name,
            song: res.data[0].title,
            src: res.data[0].preview,
            album: res.data[0].album.title,
            cover: res.data[0].album.cover_medium
          };
          setIsPlaying(true);
          setCurrentSong(newSong);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play();
    }

    if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, volume]);

  const memoContext = useMemo(
    () => ({
      isOpen,
      getSongToPlay
    }),
    [isOpen, getSongToPlay]
  );

  return (
    <MusicPlayerContext.Provider value={memoContext}>
      <div className="relative max-h-screen w-full">
        {children}
        <MusicPlayer
          isOpen={isOpen}
          notFound={notFound}
          error={error}
          currentSong={currentSong}
          isPlaying={isPlaying}
          audioRef={audioRef}
          volume={volume}
          handleVolume={handleVolume}
          playPause={playPause}
          closePlayer={closePlayer}
          handleSongEnd={handleSongEnd}
        />
      </div>
    </MusicPlayerContext.Provider>
  );
}

export default MusicPlayerWrapper;

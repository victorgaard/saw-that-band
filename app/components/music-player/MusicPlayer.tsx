import {
  ExclamationCircleIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ChangeEvent, RefObject } from 'react';
import { CurrentSong } from './MusicPlayerContext';
import SpotifyIcon from '../icons/SpotifyIcon';

type MusicPlayerProps = {
  isOpen: boolean;
  notFound: boolean;
  error: boolean;
  currentSong: CurrentSong | undefined;
  playPause: () => void;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  volume: number;
  handleVolume: (e: ChangeEvent<HTMLInputElement>) => void;
  closePlayer: () => void;
  handleSongEnd: () => void;
};

type CloseButtonProps = {
  onClose: () => void;
};

function CloseButton({ onClose }: CloseButtonProps) {
  {
    return (
      <button
        onClick={onClose}
        type="button"
        className="flex size-14 cursor-pointer items-center justify-center rounded-full border border-zinc-600/50 bg-white/5 p-4 transition-colors hover:bg-white/10"
        aria-label="Close player"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>
    );
  }
}

function MusicPlayer({
  isOpen,
  notFound,
  error,
  currentSong,
  isPlaying,
  audioRef,
  volume,
  handleVolume,
  playPause,
  closePlayer,
  handleSongEnd
}: MusicPlayerProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-[76px] z-20 w-full animate-fade-in-up-short rounded-lg rounded-b-none border border-zinc-600/50 bg-zinc-700/50 p-4 pb-6 opacity-0 backdrop-blur-lg sm:-bottom-2 sm:right-4 sm:w-[calc(100vw-32px)] md:right-8 md:w-[calc(100vw-128px)] lg:right-10 lg:w-[calc(100vw-464px)]">
          {error && (
            <div className="flex items-center justify-center gap-8 sm:justify-between">
              <div className="flex w-full items-center gap-4 sm:w-auto">
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-zinc-700 text-zinc-500">
                  <SpotifyIcon className="h-10 w-10" />
                  <div className="absolute bottom-4 right-4 rounded-full bg-red-300">
                    <ExclamationCircleIcon className="h-5 w-5 text-zinc-950" />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-base font-semibold">
                    Spotify server instability
                  </p>
                  <p className="text-sm font-medium text-zinc-300">
                    There was an issue on our end connecting to Spotify servers.
                    Please try again later.
                  </p>
                </div>
              </div>
              <CloseButton onClose={closePlayer} />
            </div>
          )}
          {!error && notFound && (
            <div className="flex items-center justify-center gap-8 sm:justify-between">
              <div className="flex w-full items-center gap-4 sm:w-auto">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-zinc-700 text-zinc-500">
                  <ExclamationCircleIcon className="h-10 w-10" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-base font-semibold">Song not found</p>
                  <p className="text-sm font-semibold text-zinc-300">
                    Please try a different one
                  </p>
                  <p className="hidden text-sm text-zinc-400 sm:block">
                    The band or song name did not not match any results on
                    Spotify
                  </p>
                </div>
              </div>
              <CloseButton onClose={closePlayer} />
            </div>
          )}
          {!error && !currentSong && !notFound && (
            <div className="flex animate-pulse items-center justify-center gap-8 sm:justify-between">
              <div className="flex w-full items-center gap-4 sm:w-auto">
                <div className="h-20 w-20 rounded-lg bg-zinc-700" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-36 rounded-lg bg-zinc-700" />
                  <div className="h-3 w-24 rounded-lg bg-zinc-700" />
                  <div className="h-3 w-48 rounded-lg bg-zinc-700" />
                </div>
              </div>
              <div className="hidden items-center gap-4 sm:flex">
                <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-zinc-600/50 bg-white/5 p-4 transition-colors hover:bg-white/10 sm:flex" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-600/50 bg-white/5 p-4 transition-colors hover:bg-white/10" />
                <CloseButton onClose={closePlayer} />
              </div>
            </div>
          )}
          {!error && currentSong && (
            <div className="flex animate-fade-in items-center justify-between gap-8 opacity-0">
              <div className="flex items-center gap-4 sm:w-auto">
                <div className="group relative flex-shrink-0">
                  <Image
                    src={currentSong.cover}
                    width={80}
                    height={80}
                    alt={currentSong.band + currentSong.song}
                    className="h-20 w-20 rounded-lg object-fill"
                  />
                  <div className="group absolute bottom-1 left-1 rounded-full bg-zinc-900">
                    <SpotifyIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-11 left-0 z-50 hidden animate-fade-in whitespace-nowrap rounded-lg bg-zinc-950 px-6 py-2 text-sm font-medium text-white shadow-lg group-hover:block">
                    Song sample powered by Spotify
                  </div>
                </div>
                <div className="flex w-[180px] flex-col gap-0.5 overflow-hidden sm:w-full">
                  <p className="truncate text-base font-semibold">
                    {currentSong.song}
                  </p>
                  <p className="truncate text-sm font-semibold text-zinc-300">
                    {currentSong.band}
                  </p>
                  <p className="truncate text-sm text-zinc-400">
                    {currentSong.album}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-4 overflow-hidden">
                <div className="group hidden sm:block">
                  <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-zinc-600/50 p-4 text-zinc-400 transition-all hover:border hover:bg-white/5 group-hover:w-32">
                    <SpeakerWaveIcon className="h-8 w-8 group-hover:hidden" />
                    <div className="hidden animate-fade-in items-center justify-center opacity-0 group-hover:flex">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume * 100}
                        onChange={e => handleVolume(e)}
                        className="h-1 w-full cursor-pointer appearance-none rounded-full bg-zinc-500 accent-zinc-200 active:bg-zinc-500/50 active:accent-zinc-400"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={playPause}
                  type="button"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-600/50 bg-white/5 p-4 transition-colors hover:bg-white/10"
                  aria-label="Play and pause the song"
                >
                  {isPlaying ? (
                    <PauseIcon className="h-8 w-8" />
                  ) : (
                    <PlayIcon className="h-8 w-8 fill-white" />
                  )}
                </button>
                <CloseButton onClose={closePlayer} />
                <audio ref={audioRef} onEnded={handleSongEnd}>
                  <source src={currentSong.src} type="audio/ogg" />
                  <track kind="captions" />
                </audio>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MusicPlayer;

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

type MusicPlayerProps = {
  isOpen: boolean;
  notFound: boolean;
  currentSong: CurrentSong | undefined;
  playPause: () => void;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  volume: number;
  handleVolume: (e: ChangeEvent<HTMLInputElement>) => void;
  closePlayer: () => void;
  handleSongEnd: () => void;
};

function MusicPlayer({
  isOpen,
  notFound,
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
          {notFound && (
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
                    The band or song name did not not match any results
                  </p>
                </div>
              </div>
              <button
                onClick={closePlayer}
                type="button"
                className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-zinc-600/50 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>
          )}
          {!currentSong && !notFound && (
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
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-600/50 bg-white/5 p-4 transition-colors hover:bg-white/10" />
              </div>
            </div>
          )}
          {currentSong && (
            <div className="flex animate-fade-in items-center justify-between gap-8 opacity-0">
              <div className="flex items-center gap-4 sm:w-auto">
                <Image
                  src={currentSong.cover}
                  width={80}
                  height={80}
                  alt={currentSong.band + currentSong.song}
                  className="h-20 w-20 rounded-lg object-fill"
                />
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
              <div className="flex shrink-0 items-center gap-4">
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
                >
                  {isPlaying ? (
                    <PauseIcon className="h-8 w-8" />
                  ) : (
                    <PlayIcon className="h-8 w-8 fill-white" />
                  )}
                </button>
                <button
                  onClick={closePlayer}
                  type="button"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-zinc-600/50 p-4 text-zinc-400 transition-colors hover:border hover:bg-white/5 hover:text-white"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
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

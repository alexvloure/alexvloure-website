'use client';

import { useSpotify } from '@/hooks/useSpotify';
import noise from '@/assets/images/noise-optimized.gif';
import { BsSpotify, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import styles from '@/styles/SpotifyCard.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Card from './Card';

export default function SpotifyCard() {
  const { t } = useTranslation('global');
  const { data, isLoading } = useSpotify();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('music') as HTMLAudioElement;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      handlePause();
    }
  }, [data]);

  const handlePlay = () => {
    setIsPlaying(true);
    Array.from(Array(10).fill(0)).forEach((_, i) => {
      const wave = document.getElementById(`wave${i + 1}`)!;
      wave.style.animationPlayState = 'running';
    });
  };

  const handlePause = () => {
    setIsPlaying(false);
    Array.from(Array(10).fill(0)).forEach((_, i) => {
      const wave = document.getElementById(`wave${i + 1}`)!;
      wave.style.animationPlayState = 'paused';
    });
  };

  const handleState = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <Card
      colSpan={2}
      style={{
        backgroundImage: `url(${data?.album.images[0].url || noise.src})`,
      }}
      className="bg-cover bg-center bg-blend-overlay bg-[rgba(0,0,0,0.5)] md:col-span-1 md:aspect-square flex flex-col justify-end md:justify-between p-3 md:p-4 lg:p-8">
      <a
        href={data?.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute invisible md:visible md:static md:text-4xl max-w-[36px] text-[#1DB954] duration-500 hover:text-[#39a961] ease-in-out">
        <BsSpotify />
      </a>
      <div>
        <h2 className="text-white font-bold text-xs md:text-xl lg:text-2xl">
          {t('spotify.recently')}
        </h2>
        <div className="flex mb-2 flex-col">
          <p>{isLoading && t('loading')}</p>
          <p className="text-white w-full xl:text-xl lg:text-lg text-xs font-semibold truncate">
            {!isLoading && data?.name}
          </p>
          <p className="text-white w-full xl:text-xl lg:text-lg text-xs truncate">
            {!isLoading && data?.artists.length > 1
              ? data?.artists.map((artist: any) => artist.name).join(', ')
              : data?.artists[0].name}
          </p>
        </div>
        <div className="h-[2vh] mt-1 w-min flex justify-center items-center">
          <div
            className=" text-white text-xl mr-1 cursor-pointer"
            onClick={() => handleState()}>
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </div>
          <div className={styles.waveform} id="wave1"></div>
          <div className={styles.waveform} id="wave2"></div>
          <div className={styles.waveform} id="wave3"></div>
          <div className={styles.waveform} id="wave4"></div>
          <div className={styles.waveform} id="wave5"></div>
          <div className={styles.waveform} id="wave6"></div>
          <div className={styles.waveform} id="wave7"></div>
          <div className={styles.waveform} id="wave8"></div>
          <div className={styles.waveform} id="wave9"></div>
          <div className={styles.waveform} id="wave10"></div>
          <audio
            src={data?.preview_url}
            id="music"
            onEnded={handlePause}></audio>
        </div>
      </div>
    </Card>
  );
}

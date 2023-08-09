import { useSpotify } from '@/hooks/useSpotify';
import Image from 'next/image';
import noise from '@/assets/noise.gif';
import { BsSpotify, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import styles from '@/styles/SpotifyCard.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function SpotifyCard() {
  const { t } = useTranslation('global');
  const { data, isLoading } = useSpotify();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    handlePause();
  }, []);

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
    document.getElementById('wave1')!.style.animationPlayState = 'running';
    document.getElementById('wave2')!.style.animationPlayState = 'running';
    document.getElementById('wave3')!.style.animationPlayState = 'running';
    document.getElementById('wave4')!.style.animationPlayState = 'running';
    document.getElementById('wave5')!.style.animationPlayState = 'running';
    document.getElementById('wave6')!.style.animationPlayState = 'running';
    document.getElementById('wave7')!.style.animationPlayState = 'running';
    document.getElementById('wave8')!.style.animationPlayState = 'running';
    document.getElementById('wave9')!.style.animationPlayState = 'running';
    document.getElementById('wave10')!.style.animationPlayState = 'running';
  };

  const handlePause = () => {
    setIsPlaying(false);
    document.getElementById('wave1')!.style.animationPlayState = 'paused';
    document.getElementById('wave2')!.style.animationPlayState = 'paused';
    document.getElementById('wave3')!.style.animationPlayState = 'paused';
    document.getElementById('wave4')!.style.animationPlayState = 'paused';
    document.getElementById('wave5')!.style.animationPlayState = 'paused';
    document.getElementById('wave6')!.style.animationPlayState = 'paused';
    document.getElementById('wave7')!.style.animationPlayState = 'paused';
    document.getElementById('wave8')!.style.animationPlayState = 'paused';
    document.getElementById('wave9')!.style.animationPlayState = 'paused';
    document.getElementById('wave10')!.style.animationPlayState = 'paused';
  };

  const handleState = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <div className="relative flex flex-col justify-end md:justify-between rounded-3xl col-span-2 md:col-span-1 md:aspect-square overflow-hidden p-3 md:p-7 lg:p-8 bg-[#0000008f]">
      <a
        href={data?.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute invisible md:visible md:static md:text-4xl max-w-[36px] text-[#1DB954] duration-500 hover:text-[#39a961] ease-in-out">
        <BsSpotify />
      </a>
      <Image
        src={data?.album.images[0].url || noise}
        alt="Album cover last song played"
        width={data?.album.images[0].width}
        height={data?.album.images[0].height}
        priority
        className="absolute w-full h-full top-0 left-0 object-cover object-center -z-10 transition duration-300 ease-in-out transform scale-[106%]"
      />
      <div>
        <h2 className="text-white font-bold text-xs lg:text-2xl md:text-xl">
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
            className=" text-white text-xl mr-1"
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
    </div>
  );
}

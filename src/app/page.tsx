'use client';

import AboutCard from '@/components/AboutCard';
import LanguageCard from '@/components/LanguageCard';
import ThemeCard from '@/components/ThemeCard';
import LinkedInCard from '@/components/LinkedInCard';
import ExperienceCard from '@/components/ExperienceCard';
import CVCard from '@/components/CVCard';
import TwitterCard from '@/components/TwitterCard';
import GithubCard from '@/components/GithubCard';
import SkillsCard from '@/components/SkillsCard';
import MapCard from '@/components/MapCard';
import { motion } from 'framer-motion';
import MailCard from '@/components/MailCard';
import SpotifyCard from '@/components/SpotifyCard';
import WeatherCard from '@/components/WeatherCard';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 2.5, delay: 0, type: 'spring' }}
      className="flex flex-col m-5">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
        <AboutCard />
        <LanguageCard />
        <ThemeCard />
        <ExperienceCard />
        <SkillsCard />
        <GithubCard />
        <MapCard />
        <LinkedInCard />
        <TwitterCard />
        <WeatherCard />
        <SpotifyCard />
        <MailCard />
      </div>
    </motion.div>
  );
}

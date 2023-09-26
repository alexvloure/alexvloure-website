'use client';

import AboutCard from '@/components/AboutCard';
import LanguageCard from '@/components/LanguageCard';
import ThemeCard from '@/components/ThemeCard';
import LinkedInCard from '@/components/LinkedInCard';
import ExperienceCard from '@/components/ExperienceCard';
import TwitterCard from '@/components/TwitterCard';
import GithubCard from '@/components/GithubCard';
import SkillsCard from '@/components/SkillsCard';
import MapCard from '@/components/MapCard';
import MailCard from '@/components/MailCard';
import SpotifyCard from '@/components/SpotifyCard';
import WeatherCard from '@/components/WeatherCard';
import BlogCard from '@/components/blog-components/BlogCard';

export default function Home() {
  return (
    <div className="flex flex-col mx-5">
      {/* Gradients to apply to icons while no other way is available */}
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', top: '0', left: '0' }}>
        <linearGradient id="dark-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#B585C2" offset="0%" />
          <stop stopColor="#8343E7" offset="100%" />
        </linearGradient>
      </svg>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', top: '0', left: '0' }}>
        <linearGradient id="light-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#ED467A" offset="0%" />
          <stop stopColor="#EC7B25" offset="100%" />
        </linearGradient>
      </svg>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-10 container mx-auto xl:px-20">
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
        <BlogCard />
      </div>
    </div>
  );
}

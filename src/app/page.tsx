import AboutCard from '@/components/home-components/AboutCard';
import LanguageCard from '@/components/home-components/LanguageCard';
import ThemeCard from '@/components/home-components/ThemeCard';
import LinkedInCard from '@/components/home-components/LinkedInCard';
import ExperienceCard from '@/components/home-components/ExperienceCard';
import TwitterCard from '@/components/home-components/TwitterCard';
import GithubCard from '@/components/home-components/GithubCard';
import SkillsCard from '@/components/home-components/SkillsCard';
import MapCard from '@/components/home-components/MapCard';
import MailCard from '@/components/home-components/MailCard';
import SpotifyCard from '@/components/home-components/SpotifyCard';
import WeatherCard from '@/components/home-components/WeatherCard';
import BlogCard from '@/components/blog-components/BlogCard';
// import { getPosts } from '@/utils/getPost';
// import BlogPostsCard from '@/components/home-components/BlogPostsCard';

export default function Home() {
  // const posts = await getPosts();

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
        {/* <BlogPostsCard posts={posts} /> */}
      </div>
    </div>
  );
}

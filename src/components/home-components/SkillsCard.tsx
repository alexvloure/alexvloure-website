'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiGit,
  SiHtml5,
  SiCss3,
  SiGo,
} from 'react-icons/si';
import Card from './Card';

export default function SkillsCard() {
  const { theme, resolvedTheme } = useTheme();
  const [gradient, setGradient] = useState<string>('');

  useEffect(() => {
    if (theme === 'system') {
      if (resolvedTheme === 'light') {
        setGradient('url(#light-gradient)');
      } else {
        setGradient('url(#dark-gradient)');
      }
    } else if (theme === 'light') {
      setGradient('url(#light-gradient)');
    } else {
      setGradient('url(#dark-gradient)');
    }
  }, [theme, resolvedTheme]);

  return (
    <Card
      colSpan={1}
      withDefaultColor
      className="grid grid-cols-4 place-content-center place-items-center gap-3 md:gap-8 p-4 md:p-8 text-center text-xl md:text-2xl lg:text-5xl">
      <SiHtml5
        style={{
          fill: gradient,
        }}
      />
      <SiCss3 style={{ fill: gradient }} />
      <SiTypescript
        style={{
          fill: gradient,
        }}
      />
      <SiReact
        style={{
          fill: gradient,
        }}
      />
      <SiNextdotjs
        style={{
          fill: gradient,
        }}
      />
      <SiVite
        style={{
          fill: gradient,
        }}
      />
      <SiTailwindcss
        style={{
          fill: gradient,
        }}
      />
      <SiJest
        style={{
          fill: gradient,
        }}
      />
      <SiCypress
        style={{
          fill: gradient,
        }}
      />
      <SiTestinglibrary
        style={{
          fill: gradient,
        }}
      />
      <SiGo
        style={{
          fill: gradient,
        }}
      />
      <SiGit
        style={{
          fill: gradient,
        }}
      />
    </Card>
  );
}

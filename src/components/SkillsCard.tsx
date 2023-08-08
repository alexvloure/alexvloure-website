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
  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

export default function SkillsCard() {
  const { theme, resolvedTheme } = useTheme();
  const [gradient, setGradient] = useState<string>('');

  useEffect(() => {
    if (theme === 'system') {
      if (resolvedTheme === 'light') {
        setGradient('url(#lime-gradient)');
      } else {
        setGradient('url(#purple-gradient)');
      }
    } else if (theme === 'light') {
      setGradient('url(#lime-gradient)');
    } else {
      setGradient('url(#purple-gradient)');
    }
  }, [theme, resolvedTheme]);

  return (
    <>
      {/* Gradients to apply to icons while no other way is available */}
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', top: '0', left: '0' }}>
        <linearGradient
          id="purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%">
          <stop stopColor="#6b21a8" offset="0%" />
          <stop stopColor="#a855f7" offset="100%" />
        </linearGradient>
      </svg>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', top: '0', left: '0' }}>
        <linearGradient id="lime-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f6212" offset="0%" />
          <stop stopColor="#84cc16" offset="100%" />
        </linearGradient>
      </svg>
      <div className="grid grid-cols-4 place-content-center place-items-center bg-[#F5F5F7] dark:bg-[#010101] gap-3 md:gap-8 p-4 md:p-8 rounded-3xl overflow-hidden relative col-span-1 aspect-square shadow-sm text-center text-xl md:text-2xl lg:text-5xl transition duration-300 ease-in-out">
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
        <SiNodedotjs
          style={{
            fill: gradient,
          }}
        />
        <SiGit
          style={{
            fill: gradient,
          }}
        />
      </div>
    </>
  );
}

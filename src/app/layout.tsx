import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ProvidersWrapper from './ProvidersWrapper';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'alexvloure | Frontend developer',
  description: `Hey! I'm alexvloure, a frontend developer proficiend in HTML, CSS and JavaScript.`,
  keywords: [
    'alexvloure',
    'frontend',
    'developer',
    'html',
    'css',
    'javascript',
    'react',
    'nextjs',
    'tailwindcss',
    'vercel',
  ],
  creator: 'alexvloure',
  openGraph: {
    type: 'website',
    url: 'https://alexvloure.dev',
    title: 'alexvloure | Frontend developer',
    description: `Hey! I'm alexvloure, a frontend developer proficiend in HTML, CSS and JavaScript.`,
    siteName: 'alexvloure',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ProvidersWrapper attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ProvidersWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

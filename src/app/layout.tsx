import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ProvidersWrapper from './ProvidersWrapper';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'alexvloure | Frontend developer',
  description: 'Made with 🖤',
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
      </body>
    </html>
  );
}

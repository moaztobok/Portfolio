'use client';

import MobileNav from '@/components/MobileNav';
import { animatePageIn } from '@/utils/animations';
import { useEffect } from 'react';
import Navigation from '../components/DesktopNav';
import NavOther from '../components/NavOther';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="fixed left-0 top-0 z-50 min-h-screen w-1/4 bg-black"
      />
      <div
        id="banner-2"
        className="fixed left-1/4 top-0 z-50 min-h-screen w-1/4 bg-black"
      />
      <div
        id="banner-3"
        className="fixed left-2/4 top-0 z-50 min-h-screen w-1/4 bg-black"
      />
      <div
        id="banner-4"
        className="fixed left-3/4 top-0 z-50 min-h-screen w-1/4 bg-black"
      />
      <NavOther />
      <MobileNav />
      <Navigation />
      {children}
    </div>
  );
}

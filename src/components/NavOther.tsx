'use client';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

const NavOther = () => {
  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        if (html) html.classList.add('dark');
      }
    } else {
      if (window.matchMedia('(prefers-color-scheme:dark').matches) {
        if (html) html.classList.add('dark');
      }
    }
  }, []);
  const handleTheme = () => {
    if (typeof window === 'undefined') return;
    else {
      const html = document.querySelector('html');
      if (!html) return;
      if (!html.classList.contains('dark')) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };
  return (
    <div
      className="absolute bottom-full z-30 flex w-full justify-between p-4"
      id="top-nav"
    >
      <button
        className="relative aspect-square h-8 w-8 rounded-full bg-primary"
        onClick={handleTheme}
      >
        <Sun
          className="absolute left-0 top-0 h-full w-full rotate-0  scale-75 fill-primary-foreground stroke-primary-foreground transition-all  dark:-rotate-90 dark:scale-0"
          size={24}
        />

        <Moon
          className="absolute left-0  top-0 h-full w-full rotate-90 scale-0  fill-primary-foreground stroke-primary-foreground transition-all  dark:rotate-0 dark:scale-75"
          size={24}
        />
      </button>

      <div className="flex gap-2 text-primary">
        <Link href={'https://www.behance.net/MoazTobok'}>Behance</Link>
        {' /'}
        <Link href={'https://www.instagram.com/moaztobok/'}>Instagram</Link>
        {' /'}
        <Link href={'https://www.linkedin.com/in/moaztobok/'}>LinkedIn</Link>
      </div>
    </div>
  );
};

export default NavOther;

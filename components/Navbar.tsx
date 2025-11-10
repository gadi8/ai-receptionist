'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="#" className="text-lg font-semibold text-primary-700">
          BrightDesk AI
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-primary-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="md">
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5" />
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col space-y-2 px-4 py-4 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-2 py-2 hover:bg-primary-50">
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="#contact">Request a Quote</a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

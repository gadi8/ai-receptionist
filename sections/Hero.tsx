import Link from 'next/link';
import { Button } from '@/components/Button';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white" id="hero">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:py-32">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
            AI receptionist for local businesses
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Give your customers a concierge-level first impression.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            BrightDesk AI answers calls, qualifies leads, and books appointments so your team can stay focused on doing what they do best.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Button size="lg" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
            <Link href="#services" className="text-sm font-semibold text-primary-700 hover:text-primary-800">
              See how it works →
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 text-left text-sm text-slate-600 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-slate-900">24/7 Coverage</dt>
              <dd>Always-on support for callers across time zones.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Lead Enrichment</dt>
              <dd>Capture contact info, services, and intent.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">CRM Ready</dt>
              <dd>Sync data into your tools or export with one click.</dd>
            </div>
          </dl>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-primary-200" aria-hidden="true" />
            <div className="relative grid gap-6 p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Live call transcript</p>
                <div className="mt-3 space-y-3 rounded-2xl border border-white/70 bg-white/70 p-4 text-sm text-slate-700 shadow-sm backdrop-blur">
                  <p className="font-medium text-slate-900">👤 Caller</p>
                  <p>
                    Hi! I&apos;m looking to schedule a consultation for a kitchen remodel. Do you have availability next week?
                  </p>
                  <div className="rounded-xl bg-primary-600/10 p-3 text-primary-900">
                    <p className="font-medium">🤖 BrightDesk</p>
                    <p>Absolutely! Tuesday or Thursday afternoon both have openings. Which works best for you?</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Summary</p>
                <p className="mt-3 text-sm text-slate-700">
                  Qualified lead for kitchen remodel. Prefers consultation Tuesday afternoon. Shared phone + email for follow-up.
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div>
                    <dt className="font-semibold text-slate-900">Lead score</dt>
                    <dd>Hot</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Captured</dt>
                    <dd>2 mins ago</dd>
                  </div>
                </dl>
              </div>
            </div>
            <svg
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 text-primary-200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="heroGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
                  <stop stopColor="currentColor" stopOpacity="0.8" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="100" fill="url(#heroGradient)" />
            </svg>
            <svg
              className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 text-primary-300"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroGradient2" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="currentColor" stopOpacity="0.6" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="200" height="200" rx="100" fill="url(#heroGradient2)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

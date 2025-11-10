import { SectionHeading } from '@/components/SectionHeading';

const stats = [
  { label: 'Avg. response time', value: '< 8 seconds' },
  { label: 'Appointments booked', value: '1,200+' },
  { label: 'Customer satisfaction', value: '98%' }
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Why BrightDesk"
              title="Your always-on receptionist that never misses a call"
              description="Our AI handles inbound calls, captures leads, and sends real-time notifications to your team. Customize scripts, FAQs, and follow-up steps so every conversation feels on-brand."
            />
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-sm text-slate-600 shadow-sm">
              <p>
                "Since switching to BrightDesk AI, we respond to every call, even during busy service windows. New customers mention how easy it was to get information and request appointments."
              </p>
              <p className="mt-4 font-semibold text-slate-900">— Alex Chen, Founder at Riverbend Plumbing</p>
            </div>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <dt className="text-sm font-medium text-slate-600">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

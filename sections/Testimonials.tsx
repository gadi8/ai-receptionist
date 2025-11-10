import { SectionHeading } from '@/components/SectionHeading';

const testimonials = [
  {
    name: 'Danielle Ortiz',
    role: 'Owner, LuxeLash Studio',
    quote:
      'Our stylists no longer juggle calls between appointments. The AI receptionist books fills automatically and texts us notes after every call.'
  },
  {
    name: 'Marcus Bell',
    role: 'Clinic Manager, Renew Wellness',
    quote:
      'Patients get answers immediately, even after hours. It is like having a trained staff member who never sleeps.'
  },
  {
    name: 'Priya Raman',
    role: 'Operations, Peak HVAC',
    quote:
      'We turn missed calls into scheduled estimates. The dashboard makes it easy to track every lead in one place.'
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Social Proof"
          title="Trusted by service leaders across industries"
          description="From contractors to clinics, BrightDesk adapts to the workflows and tone your brand requires."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <blockquote className="text-sm text-slate-600">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-slate-900">
                {testimonial.name}
                <span className="block text-xs font-normal text-slate-500">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

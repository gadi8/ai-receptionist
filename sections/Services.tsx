import { SectionHeading } from '@/components/SectionHeading';

const services = [
  {
    title: 'Inbound call triage',
    description: 'Answer calls, gather caller context, and route messages instantly to the right team member.'
  },
  {
    title: 'Appointment scheduling',
    description: 'Offer real-time availability, book appointments, and send confirmations via SMS or email.'
  },
  {
    title: 'Lead qualification',
    description: 'Ask customized questions to qualify prospects before handing them to sales.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything your front desk needs in one platform"
          description="BrightDesk AI handles every touchpoint from the first ring to the booked appointment. Configure workflows and responses for each service you offer."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

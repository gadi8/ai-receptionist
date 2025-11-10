'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
  fieldErrors: Record<string, string | undefined>;
}

const initialState: FormState = {
  loading: false,
  success: false,
  error: null,
  fieldErrors: {}
};

export function ContactSection() {
  const [state, setState] = useState<FormState>(initialState);
  const businessId = process.env.NEXT_PUBLIC_DEMO_BUSINESS_ID;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setState((prev) => ({ ...prev, loading: true, error: null, fieldErrors: {} }));

    try {
      if (!businessId) {
        throw new Error('NEXT_PUBLIC_DEMO_BUSINESS_ID is not defined.');
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          businessId,
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          serviceType: payload.serviceType,
          message: payload.message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        setState({
          loading: false,
          success: false,
          error: result.error ?? 'Something went wrong. Please try again.',
          fieldErrors: result.fieldErrors ?? {}
        });
        return;
      }

      event.currentTarget.reset();
      setState({ loading: false, success: true, error: null, fieldErrors: {} });
    } catch (error) {
      console.error(error);
      setState({
        loading: false,
        success: false,
        error: 'Network error. Please try again.',
        fieldErrors: {}
      });
    }
  }

  return (
    <section id="contact" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 rounded-3xl bg-white p-10 shadow-2xl lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Contact</p>
            <h2 className="text-3xl font-bold text-slate-900">Request a tailored demo</h2>
            <p className="text-sm text-slate-600">
              Share a bit about your business and the services you offer. We will reach out within one business day with a customized walkthrough.
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Call us</p>
              <a href="tel:+1234567890" className="block text-primary-700">
                (123) 456-7890
              </a>
              <p className="pt-4 font-semibold text-slate-900">Office hours</p>
              <p>Monday–Friday, 8am–6pm {process.env.NEXT_PUBLIC_DEMO_TIMEZONE ?? 'local time'}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2">
              <Input label="Full name" name="name" placeholder="Jane Smith" required error={state.fieldErrors.name} />
              <Input label="Phone number" name="phone" placeholder="(555) 123-4567" required error={state.fieldErrors.phone} />
              <Input label="Email" name="email" type="email" placeholder="you@example.com" error={state.fieldErrors.email} />
              <Input label="Service needed" name="serviceType" placeholder="Installation, facial, consultation" error={state.fieldErrors.serviceType} />
            </div>
            <Textarea label="How can we help?" name="message" rows={4} placeholder="Tell us about your project or questions." error={state.fieldErrors.message} />
            {state.error ? <p className="text-sm text-red-500">{state.error}</p> : null}
            {state.success ? <p className="text-sm text-green-600">Thanks! We will be in touch shortly.</p> : null}
            <Button type="submit" size="lg" disabled={state.loading || !businessId} className="w-full sm:w-auto">
              {state.loading ? 'Sending...' : 'Submit request'}
            </Button>
            {!businessId ? (
              <p className="text-sm text-red-500">
                Configure <code>NEXT_PUBLIC_DEMO_BUSINESS_ID</code> to enable submissions.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { LoginForm } from './LoginForm';
import { LogoutButton } from './LogoutButton';

const COOKIE_NAME = 'dashboard_auth';

async function getDashboardData(businessId?: string) {
  const leadWhere = businessId ? { businessId } : undefined;
  const callWhere = businessId ? { businessId } : undefined;

  const [leads, calls] = await Promise.all([
    prisma.lead.findMany({
      where: leadWhere,
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: {
        business: {
          select: { name: true }
        }
      }
    }),
    prisma.call.findMany({
      where: callWhere,
      orderBy: { startedAt: 'desc' },
      take: 20,
      include: {
        business: {
          select: { name: true }
        },
        lead: {
          select: {
            name: true,
            phone: true,
            id: true
          }
        }
      }
    })
  ]);

  return { leads, calls };
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}

export default async function DashboardPage({ searchParams }: { searchParams?: { businessId?: string } }) {
  const cookie = cookies().get(COOKIE_NAME)?.value;
  if (cookie !== 'authenticated') {
    if (!process.env.DASHBOARD_PASSWORD) {
      throw new Error('DASHBOARD_PASSWORD environment variable is required.');
    }
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-12">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard access</h1>
        <p className="mt-2 text-sm text-slate-600">Enter the shared password to view leads and call summaries.</p>
        <div className="mt-8 w-full">
          <LoginForm />
        </div>
      </div>
    );
  }

  const businessId = searchParams?.businessId ?? process.env.DEFAULT_BUSINESS_ID ?? undefined;

  const { leads, calls } = await getDashboardData(businessId);

  return (
    <div className="mx-auto min-h-[70vh] max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Operations dashboard</h1>
          <p className="mt-1 text-sm text-slate-600">
            Recent activity for {businessId ? 'selected business' : 'all businesses'}.
          </p>
        </div>
        <LogoutButton />
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Recent leads</h2>
              <p className="text-xs text-slate-500">Captures from website and phone sources.</p>
            </div>
            <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
              {leads.length}
            </span>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-slate-500">Created</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-500">Lead</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-500">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-4 py-6 text-center text-slate-500">
                      No leads yet.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead any) => (
                    <tr key={lead.id}>
                      <td className="px-4 py-3 text-slate-600">{formatDate(lead.createdAt)}</td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-slate-900">{lead.name}</div>
                        <div className="text-xs text-slate-500">{lead.phone}</div>
                        {lead.serviceType ? (
                          <div className="text-xs text-slate-500">Service: {lead.serviceType}</div>
                        ) : null}
                      </td>
                      <td className="px-4 py-3 capitalize text-slate-600">{lead.source}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Recent calls</h2>
              <p className="text-xs text-slate-500">Summaries from connected phone workflows.</p>
            </div>
            <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
              {calls.length}
            </span>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-slate-500">Started</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-500">Caller</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-500">Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {calls.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-4 py-6 text-center text-slate-500">
                      No calls logged yet.
                    </td>
                  </tr>
                ) : (
                  calls.map((call) => (
                    <tr key={call.id}>
                      <td className="px-4 py-3 text-slate-600">{formatDate(call.startedAt)}</td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-slate-900">{call.lead?.name ?? call.fromNumber}</div>
                        <div className="text-xs text-slate-500">To: {call.toNumber}</div>
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {call.summary ? call.summary : <span className="text-xs text-slate-400">No summary provided.</span>}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

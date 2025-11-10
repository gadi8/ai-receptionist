import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { leadSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const defaultBusinessId = process.env.DEFAULT_BUSINESS_ID ?? process.env.NEXT_PUBLIC_DEMO_BUSINESS_ID;

    const parseResult = leadSchema.safeParse({
      ...json,
      businessId: json.businessId ?? defaultBusinessId,
      source: 'website'
    });

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: 'Invalid lead data.',
          fieldErrors
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    const lead = await prisma.lead.create({
      data: {
        businessId: data.businessId,
        name: data.name,
        phone: data.phone,
        email: data.email,
        serviceType: data.serviceType,
        message: data.message,
        source: data.source
      }
    });

    return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 });
  } catch (error) {
    console.error('Lead creation failed', error);
    return NextResponse.json({ error: 'Unable to save lead. Please try again.' }, { status: 500 });
  }
}

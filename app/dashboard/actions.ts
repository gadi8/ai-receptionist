'use server';

import { cookies } from 'next/headers';

const COOKIE_NAME = 'dashboard_auth';

export async function login(password: string) {
  const expected = process.env.DASHBOARD_PASSWORD;
  if (!expected) {
    throw new Error('DASHBOARD_PASSWORD is not configured.');
  }

  if (password !== expected) {
    return { success: false, error: 'Incorrect password.' } as const;
  }

  cookies().set(COOKIE_NAME, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/dashboard',
    maxAge: 60 * 60 * 12 // 12 hours
  });

  return { success: true } as const;
}

export async function logout() {
  cookies().delete(COOKIE_NAME);
}

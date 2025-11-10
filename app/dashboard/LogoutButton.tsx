'use client';

import { useTransition } from 'react';
import { Button } from '@/components/Button';
import { logout } from './actions';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      onClick={() =>
        startTransition(async () => {
          await logout();
          router.refresh();
        })
      }
      disabled={pending}
    >
      {pending ? 'Signing out…' : 'Sign out'}
    </Button>
  );
}

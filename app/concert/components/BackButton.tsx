'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
  );
}

export default BackButton;

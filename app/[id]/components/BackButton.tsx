'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();
  console.log(window.history);
  return (
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
  );
}

export default BackButton;

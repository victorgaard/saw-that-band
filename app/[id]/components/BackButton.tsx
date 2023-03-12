'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        if (window?.history.length === 2) {
          router.push('/');
        } else {
          router.back();
        }
      }}
    >
      Back
    </button>
  );
}

export default BackButton;

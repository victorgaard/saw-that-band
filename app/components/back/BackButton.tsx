'use client';

import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center gap-2 self-start text-sm font-medium text-zinc-300 hover:text-white"
      type="button"
      onClick={() => {
        if (window?.history.length <= 2) {
          router.push('/');
        } else {
          router.back();
        }
      }}
    >
      <ArrowSmallLeftIcon className="h-4 w-4" />
      Back
    </button>
  );
}

export default BackButton;

import LoadingSpinner from './components/icons/LoadingSpinner';

export default function Loading() {
  return (
    <div className="flex h-screen flex-col gap-8 overflow-auto overflow-x-hidden bg-zinc-870 px-4 py-8 pb-24 sm:px-12 sm:pb-8">
      <LoadingSpinner />
    </div>
  );
}

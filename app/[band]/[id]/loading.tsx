import SetlistSkeleton from './components/SetlistSkeleton';

export default function Loading() {
  return (
    <div className="flex h-screen flex-col gap-10 overflow-x-hidden bg-zinc-870 px-4 py-8 sm:px-12 sm:py-8">
      <div className="-mx-12 -my-8 flex flex-col gap-8 bg-gradient-to-br from-zinc-100/10 to-zinc-870 to-40% px-12 py-8">
        <div className="h-[20px] w-[60px] rounded-lg bg-zinc-700" />
        <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:flex-nowrap sm:items-center">
          <div className="h-[200px] w-[200px] shrink-0 rounded-lg bg-zinc-700 shadow-2xl" />
          <div className="flex flex-col justify-end gap-4">
            <div className="h-[40px] w-[200px] rounded-lg bg-zinc-700/50" />
            <div className="w-full">
              <div className="h-[58.5px] w-full rounded-lg bg-zinc-700/50" />
              <div className="mt-4 flex flex-col flex-wrap gap-2 text-sm text-zinc-400 sm:flex-row sm:items-center">
                <p className="self-start sm:self-center">Similar to</p>
                <div className="flex flex-wrap items-center gap-2 self-start">
                  {[...Array.from(Array(3).keys())].map(c => (
                    <div
                      key={c}
                      className="flex h-[24px] w-[110px] items-center gap-2 whitespace-nowrap rounded bg-zinc-700/50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SetlistSkeleton />
    </div>
  );
}

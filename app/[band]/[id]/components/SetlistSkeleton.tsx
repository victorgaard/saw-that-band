function SetlistSkeleton() {
  return (
    <div className="h-screen animate-pulse">
      <div className="h-[32px] w-36">
        <div className="h-3 w-full rounded bg-zinc-600" />
      </div>
      <div className="flex flex-col rounded border border-zinc-700/60 bg-zinc-850 p-4">
        <div className="flex flex-col gap-8 pb-14 pt-2">
          <div className="mt-3 grid gap-8 px-4 sm:grid-cols-2">
            <div className="flex h-[38px] items-center gap-4">
              <div className="h-6 w-6 rounded bg-zinc-600" />
              <div className="flex flex-col gap-2">
                <div className="h-2 w-16 rounded bg-zinc-600" />
                <div className="h-2 w-32 rounded bg-zinc-600" />
              </div>
            </div>
            <div className="flex h-[38px] items-center gap-4">
              <div className="h-6 w-6 rounded bg-zinc-600" />
              <div className="flex flex-col gap-2">
                <div className="h-2 w-16 rounded bg-zinc-600" />
                <div className="h-2 w-32 rounded bg-zinc-600" />
              </div>
            </div>
            <div className="flex h-[38px] items-center gap-4">
              <div className="h-6 w-6 rounded bg-zinc-600" />
              <div className="flex flex-col gap-2">
                <div className="h-2 w-16 rounded bg-zinc-600" />
                <div className="h-2 w-32 rounded bg-zinc-600" />
              </div>
            </div>
            <div className="flex h-[38px] items-center gap-4">
              <div className="h-6 w-6 rounded bg-zinc-600" />
              <div className="flex flex-col gap-2">
                <div className="h-2 w-16 rounded bg-zinc-600" />
                <div className="h-2 w-32 rounded bg-zinc-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-4 border-t border-zinc-600 pb-8" />
        <div className="flex flex-col">
          {Array.from(Array(12).keys()).map(item => (
            <div
              key={item}
              className="-mx-4 flex items-center gap-4 border-b border-zinc-600 px-8 py-5 last:border-none"
            >
              <div className="h-3 w-3 rounded bg-zinc-600" />
              <div className="h-2 w-64 rounded bg-zinc-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SetlistSkeleton;

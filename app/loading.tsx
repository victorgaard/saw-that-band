export default function Loading() {
  return (
    <div className="h-screen overflow-auto overflow-x-hidden bg-zinc-870 p-2 pb-24 sm:gap-8 sm:px-12 sm:py-8 sm:pb-8">
      <div className="flex animate-pulse flex-col gap-4 sm:gap-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="h-[116px] w-[116px] rounded-lg bg-zinc-700" />
          <div className="flex flex-col gap-2">
            <div className="h-4 w-12 rounded-full bg-zinc-700" />
            <div className="h-4 w-24 rounded-full bg-zinc-700" />
            <div className="h-4 w-48 rounded-full bg-zinc-700" />
          </div>
        </div>
        <div className="h-80 w-full rounded-lg border border-zinc-700/60 bg-zinc-850" />
        <div className="h-80 w-full rounded-lg border border-zinc-700/60 bg-zinc-850" />
        <div className="h-80 w-full rounded-lg border border-zinc-700/60 bg-zinc-850" />
      </div>
    </div>
  );
}

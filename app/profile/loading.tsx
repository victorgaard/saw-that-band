export default function Loading() {
  return (
    <div className="flex h-screen animate-pulse flex-col gap-8 overflow-auto overflow-x-hidden bg-zinc-870 px-4 py-8 pb-24 sm:px-12 sm:pb-8">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="h-[116px] w-[116px] rounded-lg bg-zinc-700" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-12 rounded-full bg-zinc-700" />
          <div className="h-4 w-24 rounded-full bg-zinc-700" />
        </div>
      </div>
      <div className="h-48 w-full rounded-lg bg-zinc-700" />
      <div className="h-48 w-full rounded-lg bg-zinc-700" />
    </div>
  );
}

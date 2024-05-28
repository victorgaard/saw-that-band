export default function Loading() {
  return (
    <div className="h-screen overflow-auto overflow-x-hidden bg-zinc-870 p-6 pb-24 sm:px-12 sm:pb-8">
      <div className="flex animate-pulse flex-col gap-8">
        <div className="flex h-8 w-full items-center gap-6">
          <div className="h-4 w-4 rounded-full bg-zinc-700" />
          <div className="h-4 w-60 rounded-full bg-zinc-700" />
        </div>
        {Array.from(Array(10).keys()).map(d => (
          <div key={d} className="flex items-center gap-8">
            <div className="h-[112px] w-[112px] rounded-xl bg-zinc-700" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-12 rounded-full bg-zinc-700" />
              <div className="h-4 w-24 rounded-full bg-zinc-700" />
              <div className="h-4 w-60 rounded-full bg-zinc-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

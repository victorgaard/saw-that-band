type SlimSideBarProps = {
  profileName: string;
};

function SlimSideBar({ profileName }: SlimSideBarProps) {
  return (
    <div className="flex w-20 shrink-0 items-end justify-center border-r border-stone-800 bg-stone-900 pb-8 text-stone-400">
      <p className="rotate-180 [writing-mode:vertical-lr]">
        <span className="font-semibold text-stone-200">{profileName}</span> saw
        that band
      </p>
    </div>
  );
}

export default SlimSideBar;

type SlimSideBarProps = {
  profileName: string;
};

function SlimSideBar({ profileName }: SlimSideBarProps) {
  return (
    <div className="flex w-20 shrink-0 items-end justify-center border-r bg-gray-100 pb-8">
      <p className="rotate-180 [writing-mode:vertical-lr]">
        <span className="font-semibold">{profileName}</span> saw that band
      </p>
    </div>
  );
}

export default SlimSideBar;

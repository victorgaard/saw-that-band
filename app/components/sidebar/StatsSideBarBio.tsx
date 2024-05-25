type StatsSideBarBioProps = {
  bio: string;
};

function StatsSideBarBio({ bio }: StatsSideBarBioProps) {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold text-zinc-400">BIO</p>
      <p className="text-balance text-sm">{bio}</p>
    </div>
  );
}

export default StatsSideBarBio;

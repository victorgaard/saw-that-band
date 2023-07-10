import Balancer from 'react-wrap-balancer';

type StatsSideBarBioProps = {
  bio: string;
};

function StatsSideBarBio({ bio }: StatsSideBarBioProps) {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold text-zinc-400">BIO</p>
      <p className="text-sm">
        <Balancer>{bio}</Balancer>
      </p>
    </div>
  );
}

export default StatsSideBarBio;

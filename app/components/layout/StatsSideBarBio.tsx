import Balancer from 'react-wrap-balancer';

type StatsSideBarBioProps = {
  bio: string;
};

function StatsSideBarBio({ bio }: StatsSideBarBioProps) {
  return (
    <div>
      <p className="text-base font-semibold">Bio</p>
      <p>
        <Balancer>{bio}</Balancer>
      </p>
    </div>
  );
}

export default StatsSideBarBio;

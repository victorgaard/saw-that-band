import { UserLink } from '@/app/types/user';

type StatsSideBarSocialsProps = {
  profileLinks: UserLink[];
};

function StatsSideBarSocials({ profileLinks }: StatsSideBarSocialsProps) {
  return (
    <>
      <p className="font-semibold">Links</p>
      <div className="flex gap-2">
        {profileLinks.map(link => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            {link.type}
          </a>
        ))}
      </div>
    </>
  );
}

export default StatsSideBarSocials;

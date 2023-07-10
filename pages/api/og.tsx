import Logo from '@/app/components/logo/Logo';
import { ImageResponse } from '@vercel/og';
import classNames from 'classnames';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

const PoppinsMedium = fetch(
  new URL('../../public/assets/fonts/Poppins-Medium.ttf', import.meta.url)
).then(res => res.arrayBuffer());

const PoppinsBold = fetch(
  new URL('../../public/assets/fonts/Poppins-Bold.ttf', import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams, origin } = req.nextUrl;
  const band = searchParams.get('band');
  const picture = searchParams.get('picture');
  const bands = searchParams.get('bands');
  const concerts = searchParams.get('concerts');
  const [medium, bold] = await Promise.all([PoppinsMedium, PoppinsBold]);

  const user = {
    id: 1,
    handle: '@victor',
    createdAt: '23-02-2023',
    name: 'Victor',
    lastName: 'F. Santos',
    fullName: 'Victor F. Santos',
    picture: '/assets/img/avatar/avatar.jpeg',
    bio: `I'm an optimistic nihilist and lifelong learner who also happens to design and code. Made in Goiânia 🇧🇷 and based in Berlin 🇩🇪`,
    links: [
      {
        type: 'lastfm',
        url: 'https://www.last.fm/user/elvengaard'
      },
      {
        type: 'setlist',
        url: 'https://www.setlist.fm/user/victorgaard'
      },
      {
        type: 'spotify',
        url: 'https://open.spotify.com/user/elvengaard?si=47de00f680484ec1&nd=1'
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/hunter.graphy/'
      },
      {
        type: 'other',
        url: 'https://victorsantos.work'
      }
    ]
  };

  const shouldRenderFallback = !band || !picture || !bands || !concerts;

  if (shouldRenderFallback)
    return new ImageResponse(
      (
        <div
          tw="flex flex-col justify-center relative w-full h-full bg-zinc-900 p-[88px]"
          style={{ letterSpacing: '-0.05em' }}
        >
          <div tw="flex items-center text-white pr-[300px]">
            <picture>
              <img
                src={`https://victor.sawthat.band/${user.picture}`}
                width={300}
                height={300}
                alt="Avatar"
                tw="rounded-[24px] mr-[52px]"
                style={{ objectFit: 'cover' }}
              />
            </picture>
            <p tw="flex flex-col flex-wrap">
              <span tw="text-[32px] opacity-60 mb-[24px]">
                victor.sawthat.band
              </span>
              <span tw="text-[110px] font-bold leading-[90px]">
                {user.name} saw that band
              </span>
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Poppins',
            data: medium,
            style: 'normal',
            weight: 500
          },
          {
            name: 'Poppins',
            data: bold,
            style: 'normal',
            weight: 700
          }
        ]
      }
    );

  return new ImageResponse(
    (
      <div
        tw="flex flex-col justify-between relative w-full h-full bg-zinc-900 px-[88px] py-[56px]"
        style={{ letterSpacing: '-0.05em' }}
      >
        <div tw="flex items-center text-white mt-[60px] pr-[300px]">
          <picture>
            <img
              src={picture!}
              width={300}
              height={300}
              alt="Avatar"
              tw="rounded-[24px] mr-[52px]"
              style={{ objectFit: 'cover' }}
            />
          </picture>
          <p tw="flex flex-col flex-wrap">
            <span tw="text-[32px] opacity-60 mb-[12px]">
              {user.name} saw that band
            </span>
            {band && (
              <span
                tw={classNames('font-bold text-[90px] leading-[80px]', {
                  'text-[120px] leading-[110px]': band.length < 10,
                  'text-[90px] leading-[80px]': band.length >= 10,
                  'text-[80px] leading-[70px]': band.length >= 24
                })}
              >
                {band}
              </span>
            )}
          </p>
        </div>

        <div tw="flex items-center justify-between">
          <div tw="flex">
            <picture>
              <img
                src={`${origin}/${user.picture}`}
                width={64}
                height={64}
                alt="Avatar"
                tw="rounded-[6px] mr-[24px]"
              />
            </picture>
            <div tw="flex flex-col text-white">
              <span tw="text-[24px]">
                {user.name} saw {bands} {bands?.length === 1 ? 'band' : 'bands'}
              </span>
              <span tw="text-[24px] opacity-60">
                from {concerts}{' '}
                {concerts?.length === 1 ? 'concert' : 'concerts'}
              </span>
            </div>
          </div>
          <div tw="flex flex-1 h-[4px] mx-16 bg-white opacity-10" />
          <p tw="text-white opacity-50">
            <Logo width={64} height={64} />
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Poppins',
          data: medium,
          style: 'normal',
          weight: 500
        },
        {
          name: 'Poppins',
          data: bold,
          style: 'normal',
          weight: 700
        }
      ]
    }
  );
}

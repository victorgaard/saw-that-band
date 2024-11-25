import Logo from '@/app/components/logo/Logo';
import { cn } from '@/app/utils/cn';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const PoppinsMedium = fetch(
    new URL('./Poppins-Medium.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());

  const PoppinsBold = fetch(
    new URL('./Poppins-Bold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());

  const { searchParams } = req.nextUrl;
  const band = searchParams.get('band');
  const picture = searchParams.get('picture');
  const bands = Number(searchParams.get('bands'));
  const concerts = Number(searchParams.get('concerts'));

  const username = searchParams.get('username');
  const userPicture = searchParams.get('userPicture');
  const userFirstName = searchParams.get('userFirstName');

  const [medium, bold] = await Promise.all([PoppinsMedium, PoppinsBold]);

  const shouldRenderFallback = !band || !picture || !bands || !concerts;

  if (shouldRenderFallback)
    return new ImageResponse(
      (
        <div
          tw="flex flex-col justify-center relative w-full h-full bg-zinc-900 p-[88px]"
          style={{ letterSpacing: '-0.05em' }}
        >
          <div tw="flex items-center text-white pr-[300px]">
            {userPicture && (
              <picture>
                <img
                  src={userPicture}
                  width={300}
                  height={300}
                  alt="Avatar"
                  tw="rounded-[24px] mr-[52px]"
                  style={{ objectFit: 'cover' }}
                />
              </picture>
            )}
            <p tw="flex flex-col flex-wrap">
              <span tw="text-[32px] opacity-60 mb-[24px]">
                {username}.sawthat.band
              </span>
              <span tw="text-[110px] font-bold leading-[90px]">
                {userFirstName || username} saw that band
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
              {userFirstName || username} saw that band
            </span>
            {band && (
              <span
                tw={cn('font-bold text-[90px] leading-[80px]', {
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
                src={userPicture || ''}
                width={64}
                height={64}
                alt="Avatar"
                tw="rounded-[6px] mr-[24px]"
              />
            </picture>
            <div tw="flex flex-col text-white">
              <span tw="text-[24px]">
                {userFirstName || username} saw {bands}{' '}
                {bands === 1 ? 'band' : 'bands'}
              </span>
              <span tw="text-[24px] opacity-60">
                in {concerts} {concerts === 1 ? 'concert' : 'concerts'}
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

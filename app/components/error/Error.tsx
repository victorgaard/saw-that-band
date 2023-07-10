import BackButton from '@/app/components/back/BackButton';
import Image from 'next/image';

type ErrorComponentProps = {
  title: string;
  message: string;
  href?: string;
};

function ErrorComponent({ title, message, href }: ErrorComponentProps) {
  return (
    <div className="flex h-screen flex-col gap-8 bg-zinc-800 p-8 text-zinc-200">
      <BackButton />
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-0">
        <Image
          src="/assets/img/other/error.svg"
          alt="Empty state"
          width={350}
          height={350}
        />
        <p className="flex flex-col gap-2">
          <span className="text-2xl font-medium text-white">{title}</span>
          <span className="text-sm">{message}</span>
        </p>
      </div>
    </div>
  );
}

export default ErrorComponent;

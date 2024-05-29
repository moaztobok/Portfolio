'use client';
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/utils/animations';

interface Props {
  href: string;
  label?: string;
  icon?: React.ReactNode;
}
export const TransitionLink = ({ href, label, icon }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button
      className=" text-white transition-all duration-200 hover:opacity-90"
      onClick={handleClick}
    >
      {label}
      {icon}
    </button>
  );
};

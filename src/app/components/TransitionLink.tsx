"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

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
      className=" text-white hover:opacity-90 duration-200 transition-all"
      onClick={handleClick}
    >
      {label}
      {icon}
    </button>
  );
};

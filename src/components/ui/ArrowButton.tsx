import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ArrowButtonProps {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
}

export default function ArrowButton({ href, text, bgColor = 'bg-[#ffd731]', textColor = 'text-black' }: ArrowButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 group/btn transition-all duration-300"
    >
      <span className={`${bgColor} ${textColor} px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300`}>{text}</span>
      <span className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center ${textColor} transition-all duration-300 group-hover/btn:-ml-4`}>
        <ChevronRight size={20} />
      </span>
    </Link>
  );
}

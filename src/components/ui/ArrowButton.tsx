interface ArrowButtonProps {
  href: string;
  text: string;
}

export default function ArrowButton({ href, text }: ArrowButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 group/btn transition-all duration-300"
    >
      <span className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">{text}</span>
      <span className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black transition-all duration-300 group-hover/btn:-ml-4">→</span>
    </a>
  );
}

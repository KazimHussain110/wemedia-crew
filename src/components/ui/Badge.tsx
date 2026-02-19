interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="bg-[#ffd731] text-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider font-semibold">
      {text}
    </span>
  );
}

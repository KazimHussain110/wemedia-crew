interface IconBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function IconBox({ icon, title, description }: IconBoxProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="text-[#ffd731]">{icon}</div>
        <h5 className="text-xl font-bold">{title}</h5>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

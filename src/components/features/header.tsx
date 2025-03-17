interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      {/* ステータスバー */}
      <div className="h-7 bg-gray-100"></div>
      
      {/* ヘッダー */}
      <div className="bg-blue-100 py-3 px-4 text-center font-bold text-xl">{title}</div>
    </>
  );
}

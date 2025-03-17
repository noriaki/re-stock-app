interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      {/* ステータスバー */}
      <div className="h-7 status-bar"></div>
      
      {/* ヘッダー */}
      <div className="header-bg py-4 px-4 text-center font-bold text-xl shadow-sm">{title}</div>
    </>
  );
}

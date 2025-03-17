import { Home, FolderOpen, Settings } from "lucide-react";

interface NavigationBarProps {
  activeTab: "home" | "categories" | "settings";
  onTabChange: (tab: "home" | "categories" | "settings") => void;
}

export default function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  return (
    <div className="bg-gray-100 py-2 border-t border-gray-300">
      <div className="flex justify-around items-center">
        <button
          className={`flex flex-col items-center p-2 ${activeTab === "home" ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => onTabChange("home")}
        >
          <Home size={20} />
          <span className="text-xs mt-1">ホーム</span>
        </button>
        <button
          className={`flex flex-col items-center p-2 ${activeTab === "categories" ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => onTabChange("categories")}
        >
          <FolderOpen size={20} />
          <span className="text-xs mt-1">カテゴリ</span>
        </button>
        <button
          className={`flex flex-col items-center p-2 ${activeTab === "settings" ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => onTabChange("settings")}
        >
          <Settings size={20} />
          <span className="text-xs mt-1">設定</span>
        </button>
      </div>
    </div>
  );
}

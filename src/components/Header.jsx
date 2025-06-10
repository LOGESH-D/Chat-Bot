import React from "react";
import Lottie from "lottie-react";
import { Sun, Moon, Trash2 } from "lucide-react";
import AIani from "../assets/AIimg.json";

export default function Header({ darkMode, setDarkMode, clearMessages }) {
  return (
    <header
      className={`flex justify-between items-center px-4 py-2 ${
        darkMode ? "bg-gray-800" : "bg-gray-200"
      } shadow`}
    >
      <div className="flex items-center gap-2">
        <Lottie animationData={AIani} loop className="w-10 h-10" />
        <h1 className="text-xl font-bold">AI Chat-Bot</h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={clearMessages}
          className="p-2 rounded-full border hover:bg-red-500 hover:text-white transition"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </header>
  );
}

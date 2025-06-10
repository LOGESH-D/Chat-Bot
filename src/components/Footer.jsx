import React from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer({ darkMode, showScrollTop, scrollToTop }) {
  return (
    <footer
      className={`w-full flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs md:text-sm ${
        darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-600"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <img
          src={logo}
          alt="Footer Logo"
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>
          © {new Date().getFullYear()} Chat-Bot | Developed by LOKiiii
        </span>

        <div className="flex items-center gap-1">
          <Mail size={14} />
          <a
            href="mailto:logeshofficial333@gmail.com"
            className="underline hover:text-blue-500"
          >
            logeshofficial333@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-1">
          <Phone size={14} />
          <a href="tel:+919488110405" className="underline hover:text-blue-500">
            +91 9488110405
          </a>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}

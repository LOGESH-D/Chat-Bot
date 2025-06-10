import React from "react";
import { Loader2 } from "lucide-react";

export default function Messages({
  messages,
  darkMode,
  loading,
  parseResponse,
}) {
  return (
    <div className="flex-1 overflow-y-auto px-2 md:px-4 space-y-2 pb-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-3 rounded-xl max-w-[80%] text-sm md:text-base ${
              message.sender === "user"
                ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-br-none"
                : darkMode
                ? "bg-gray-700 text-white rounded-bl-none"
                : "bg-gray-300 text-black rounded-bl-none"
            }`}
          >
            {message.sender === "ai"
              ? parseResponse(message.text)
              : message.text}
          </div>
        </div>
      ))}
      {loading && (
        <div className="flex justify-start">
          <div
            className={`p-3 rounded-xl max-w-[80%] text-sm md:text-base ${
              darkMode
                ? "bg-gray-700 text-white rounded-bl-none"
                : "bg-gray-300 text-black rounded-bl-none"
            } flex items-center gap-2`}
          >
            <Loader2 className="animate-spin" size={18} />
            Typing...
          </div>
        </div>
      )}
    </div>
  );
}

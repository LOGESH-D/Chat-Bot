import { Loader2, Send as SendIcon } from "lucide-react";

export default function InputBox({
  input,
  setInput,
  loading,
  handleSubmit,
  handleKeyDown,
  darkMode,
}) {
  return (
    <div className="w-full p-2 md:p-3 flex gap-2 bg-transparent">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
        className={`flex-1 p-2 rounded-md border ${
          darkMode
            ? "bg-transparent text-white border-gray-600"
            : "bg-transparent text-black border-gray-400"
        } outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50`}
        placeholder={loading ? "Please wait..." : "Type your question..."}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`px-3 md:px-4 py-2 rounded-md ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        } text-white transition flex items-center gap-1`}
      >
        {loading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <SendIcon size={18} />
        )}
        <span className="hidden md:inline">{loading ? "" : "Send"}</span>
      </button>
    </div>
  );
}

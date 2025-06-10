import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Suggestions from "./components/Suggestions";
import Messages from "./components/Messages";
import InputBox from "./components/InputBox";
import Footer from "./components/Footer";

function App() {
  const ai_url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCQl_KAj2qlf-dtskWAE7x9hJ3Ps3J4Vdg";

  const [suggestions] = useState([
    "What is AI?",
    "How does machine learning work?",
    "What are the applications of AI?",
  ]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const parseResponse = (text) => {
    const paragraphs = text.split(/\n+/);
    return paragraphs.map((para, i) => {
      const parts = para.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="mb-2">
          {parts.map((part, index) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={index} className="font-semibold">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: messageText }]);
    setLoading(true);
    try {
      const response = await axios.post(ai_url, {
        contents: [{ parts: [{ text: messageText }] }],
      });
      if (response.data) {
        const aiMessage = {
          sender: "ai",
          text: response.data.candidates[0].content.parts[0].text,
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, I am unable to process your request at the moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (loading) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e) => e.key === "Enter" && handleSubmit();

  const clearMessages = () => setMessages([]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
      } min-h-screen flex flex-col relative`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        clearMessages={clearMessages}
      />
      <div className="flex flex-col items-center py-4 text-center px-4 space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold">Chat-Bot</h1>
        <h2 className="text-base md:text-lg">👋 Welcome! Ask me anything.</h2>
      </div>
      <Suggestions
        suggestions={suggestions}
        handleClick={sendMessage}
        darkMode={darkMode}
      />
      <Messages
        messages={messages}
        darkMode={darkMode}
        loading={loading}
        parseResponse={parseResponse}
      />
      <InputBox
        input={input}
        setInput={setInput}
        loading={loading}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        darkMode={darkMode}
      />
      <Footer
        darkMode={darkMode}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />
    </div>
  );
}

export default App;

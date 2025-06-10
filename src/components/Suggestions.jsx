export default function Suggestions({ suggestions, handleClick, darkMode }) {
  return (
    <div className="flex overflow-x-auto space-x-3 px-4 pb-4 justify-center">
      {suggestions.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item)}
          className={`min-w-[150px] md:min-w-[180px] px-3 py-2 rounded-md text-sm font-medium ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          } shadow hover:scale-105 transition`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

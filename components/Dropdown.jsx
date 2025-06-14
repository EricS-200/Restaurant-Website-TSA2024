import { useState } from "react";

export default function Dropdown({ name, options, extraStyle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 100);
    setHoverTimeout(timeout);
  };

  return (
    <div
      className={`relative z-10 ${extraStyle}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="flex items-center rounded-md focus:outline-none text-black">
        <span>{name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ml-2 transition-all duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 lg:bg-white/20 bg-white md:backdrop-blur-lg border lg:border-gray-300/20 lg:shadow-lg border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {options.map((option, index) => (
              <li key={index}>
                <a
                  href={option.url}
                  className="block px-4 py-2 text-black hover:bg-white/30"
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

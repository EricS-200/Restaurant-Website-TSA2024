"use client";
import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <div
          className={`z-[2000] fixed bottom-10 left-1/2 transform -translate-x-[40%] transition-opacity duration-500 ${
              visible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="animate-bounce">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

  );
}

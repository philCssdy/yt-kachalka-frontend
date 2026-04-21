import { useEffect, useRef, useState } from "react";

const qualities = [144, 240, 360, 480, 720, 1080, 1440, 2160, 4320]; //без ответа от бэка для теста

export const DropDownList = () => {
  const [isopen, setisOpen] = useState(false);
  const [selected, setSelected] = useState(144);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handeleOnClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setisOpen(false);
      }
    };

    const hadnleKetDownEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setisOpen(false);
      }
    };

    document.addEventListener("mousedown", handeleOnClickOutside);
    document.addEventListener("keydown", hadnleKetDownEsc);

    return () => {
      document.removeEventListener("mousedown", handeleOnClickOutside);
      document.addEventListener("keydown", hadnleKetDownEsc);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-24">
      <button
        onClick={() => setisOpen(!isopen)}
        className="flex items-center justify-between w-full px-8 py-1 font-semibold bg-indigo-600 rounded-lg text-m text-indigo-50 hover:bg-indigo-700"
      >
        {selected}
        <span>▾</span>
      </button>

      {isopen && (
        <div className="absolute z-50 w-full mt-1 overflow-hidden bg-white rounded-md shadow-lg">
          {qualities.map((q) => (
            <div
              key={q}
              onClick={() => {
                setSelected(q);
                setisOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer hover:bg-indigo-700 hover:text-indigo-50 ${
                selected == q ? "bg-indigo-700 text-indigo-50" : ""
              }`}
            >
              {q}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

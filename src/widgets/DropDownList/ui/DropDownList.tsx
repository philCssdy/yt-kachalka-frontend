import { useState } from "react";

const qualities = [144, 240, 360, 480, 720, 1080, 1440, 2160, 4320]; //без ответа от бэка для теста

export const DropDownList = () => {
  const [isopen, setisOpen] = useState(false);
  const [selected, setSelected] = useState(144);

  return (
    <div className="relative w-24">
      <div>
        <button
          onClick={() => setisOpen(!isopen)}
          className="w-full px-8 py-0.5 font-semibold bg-indigo-600 rounded-lg text-m text-indigo-50 hover:bg-indigo-700 flex justify-between items-center"
        >
          {selected}
          <span>▾</span>
        </button>
      </div>
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

// ДОБАВИТЬ ЗАКРЫТИЕ ЧЕРЕЗ КЛИК МИМО USEREF USEEFFECT

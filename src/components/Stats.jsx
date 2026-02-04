import React from "react";
import { FaPlus } from "react-icons/fa";

const statsData = [
  { value: "2000", label: "Companies" },
  { value: "10", label: "Years Exp." },
  { value: "800", label: "Hours of Work" },
  { value: "150M", label: "Tracked Revenue" },
];

const Stats = () => {
  return (
    <div className="mx-auto mt-20 max-w-5xl rounded-3xl bg-white/30 px-6 py-6 shadow-lg backdrop-blur-md">
      <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
        {statsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-gray-900">
            <span className="flex items-center text-2xl font-semibold">
              {item.value}
              <FaPlus className="ml-1 text-lime-400" size={16} />
            </span>
            <p className="mt-1 text-sm text-gray-800">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

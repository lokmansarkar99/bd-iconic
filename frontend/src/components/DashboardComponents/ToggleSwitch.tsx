"use client";

import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {/* The actual checkbox input */}
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={handleToggle}
        className="sr-only peer"
      />

      {/* The Visual Toggle Track */}
      <div
        className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer 
        peer-checked:after:translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
        after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all peer-checked:bg-fuchsia-600"
      ></div>

      {/* Optional Label Text */}
      <span className="ml-3 text-sm font-medium text-gray-700">
        {isEnabled ? "On" : "Off"}
      </span>
    </label>
  );
};

export default ToggleSwitch;

import React from "react";

const QtyDropdown = ({ value, options, onChange }) => {
  return (
    <div>
      <select value={value} onChange={onChange}>
        {options.map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QtyDropdown;

/* eslint-disable react/no-array-index-key */
import React from "react";
import "./select.styles.css";

import { SelectProps } from "./select.model";

export const Select: React.FC<SelectProps> = ({
  selected,
  setSelected,
  arrayLength,
}) => {
  const options = new Array(arrayLength).fill(0);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(+e.target.value);
  };

  return (
    <div className="selectWrapper">
      <p className="selectLabel">Choose plane:</p>
      <select className="planeSelect" value={selected} onChange={handleChange}>
        {options.map((elem, index) => (
          <option key={index} value={index}>{`Plane ${index + 1}`}</option>
        ))}
      </select>
    </div>
  );
};

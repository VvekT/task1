import React from 'react';
import Input from "@tds/core-input";

const TextInput = ({
  label,
  errors,
  onChange,
  value,
  disabled,
  type,
  tooltip
}) => {
  return (
    <Input
      disabled={disabled}
      type={type}
      feedback={errors ? "error" : undefined}
      label={label}
      error={errors}
      onChange={onChange}
      value={value ?? ""}
      tooltip={tooltip}
    />
  );
};
export default TextInput;


// const getIndex = (index) => {
//   return index % 2 == 0 ? true : false
// }

{/* <div className={"row" + getIndex(index) ? "row-1" : "row-2"}> */}

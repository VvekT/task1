import React from "react";
import Select from "@tds/core-select";

const SelectInput = ({
  label,
  options,
  onChange,
  setFieldName,
  setFieldValue,
  value,
  name,
  tooltip,
  error,
  ...rest
}) => {
  const handleChange = (e) => {
    // console.log({ val: e.target.value, onChange });
    setFieldValue(name, e.target.value);
    if (setFieldName) {
      const val = e.target.options.item(
        e.target.options.selectedIndex
      ).innerText;
      setFieldName(val);
    }
    // handleChange();
  };
  return (
    <Select
      id="list"
      options={options}
      label={label}
      onChange={handleChange}
      value={value}
      {...rest}
      error={error}
      tooltip={tooltip}
    />
  );
};
export default SelectInput;

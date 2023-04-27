import React from 'react';
import Checkbox from "@tds/core-checkbox";

const CheckboxInput = ({
  label,
  checked,
  type,
  value,
  name,
  onChange,
  ...rest
}) => {
  return (
    <Checkbox
      checked={checked}
      label={label}
      type="checkbox"
      onChange={onChange}
      name={name}
      value={value}
      {...rest}
    />
  );
};
export default CheckboxInput;
import React from 'react';

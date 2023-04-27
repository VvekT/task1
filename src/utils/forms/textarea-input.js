import React from 'react';
import TextArea from "@tds/core-text-area";
import { colorCardinal } from '@tds/core-colours'

const TextAreaInput = ({
  label,
  errors,
  value,
  name,
  onChange,
  defaultValue,
  ...rest
}) => {
  return (
    <TextArea
      label={label}
      feedback={errors ? "error" : undefined}
      error={errors}
      defaltValue={defaultValue}
      onChange={onChange}
      name={name}
      value={value}
      {...rest}
      tooltip={
        <div style={{color: colorCardinal }}>
         *
        </div>
      }
    />
  );
};
export default TextAreaInput;

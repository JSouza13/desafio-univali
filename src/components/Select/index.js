import { Select } from "antd";
import React, { useState, useEffect } from "react";
import "./index.scss";

const { Option } = Select;

function SelectWrapper({
  options = [],
  initialValue,
  onChange,
  id,
  mode = "default",
  label,
  placeholder,
  required,
  disabled = false,
  defaultActiveFirstOption = false
}) {
  const [value, setValue] = useState(initialValue);
  const [internalOptions, setInternalOptions] = useState(options);

  const onChangeInternal = val => {
    let fakeEvent = {
      target: {
        value: val,
        id
      }
    };

    onChange && onChange(fakeEvent);
    setValue(val);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <React.Fragment>
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="label-required"> *</span>}
        </label>
      )}
      <Select
        defaultActiveFirstOption={defaultActiveFirstOption}
        value={value}
        onChange={onChangeInternal}
        mode={mode}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
      >
        {internalOptions.map((opt, index) => (
          <Option key={index} value={opt.key}>
            {opt.descricao}
          </Option>
        ))}
      </Select>
    </React.Fragment>
  );
}

export default SelectWrapper;

import { FC, useState } from "react";
import { Select } from "vienna-ui";
import { SortProps } from "../types";
import { options } from "../constants";

export const Sort: FC<SortProps> = ({ onChange }) => {
  const [value, setValue] = useState<string>("");

  const handleSelect = (e, data) => {
    e.target.innerText === "Не выбрано"
      ? setValue("")
      : setValue(e.target.innerText);
    onChange(data.value);
  };

  return (
    <Select
      size={"xl"}
      placeholder="Сортировать"
      value={value}
      onSelect={handleSelect}
    >
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

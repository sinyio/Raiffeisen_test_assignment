import { FC, useState } from "react";
import { Search } from "vienna-ui";
import { SearcBarProps } from "../types";

export const SearchBar: FC<SearcBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <Search
        size={{ base: "l", s: "xl" }}
        placeholder="Введите название страны"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

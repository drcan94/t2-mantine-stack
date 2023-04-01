import React, { useState } from "react";
import { InputWrapper } from "./styles";
import { IconSearch } from "@tabler/icons-react";
import { useMantineTheme } from "@mantine/core";
import { type IUser } from "../SearchResult";

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const fetchData = async (
  value: string,
  setResults: React.Dispatch<React.SetStateAction<IUser[]>>
) => {
  // fetch data from API
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = (await response.json()) as IUser[];

    const filteredData = json.filter((user: IUser) => {
      return (
        value &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(filteredData);
  } catch (error) {
    console.log(error);
  }
};

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const theme = useMantineTheme();
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    fetchData(e.target.value, setResults).catch((error) => {
      console.log(error);
    });
  };

  return (
    <InputWrapper theme={theme}>
      <IconSearch color="blue" />
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default SearchBar;

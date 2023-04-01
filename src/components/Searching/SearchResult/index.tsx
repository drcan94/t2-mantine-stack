import React from "react";
import { SearchResultContainer } from "./styles";
import { useMantineTheme } from "@mantine/core";

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
const SearchResult: React.FC<{ result: IUser }> = ({ result }) => {
  const theme = useMantineTheme();

  return (
    <SearchResultContainer theme={theme}>{result.name}</SearchResultContainer>
  );
};

export default SearchResult;

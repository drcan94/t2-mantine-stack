import React from "react";
import { SearchResultsContainer } from "./styles";
import SearchResult, { type IUser } from "../SearchResult";
import { useMantineTheme } from "@mantine/core";

interface SearchResultsProps {
  results: IUser[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const theme = useMantineTheme();
  return (
    <SearchResultsContainer theme={theme}>
      {results.map((user: IUser) => {
        return <SearchResult key={user.id} result={user} />;
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;

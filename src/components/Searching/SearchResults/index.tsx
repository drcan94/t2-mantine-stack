import React from "react";
import { SearchResultsContainer } from "./styles";
import SearchResult from "../SearchResult";
import { IUser } from "../../../screens/SearchScreen";

interface SearchResultsProps {
  results: IUser[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <SearchResultsContainer>
      {results.map((user: IUser) => {
        return <SearchResult key={user.id} result={user} />;
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;

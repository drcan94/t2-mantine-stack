import React from "react";
import { IUser } from "../../../screens/SearchScreen";
import { SearchResultContainer } from "./styles";

const SearchResult: React.FC<{ result: IUser }> = ({ result }) => {

  return (
    <SearchResultContainer>{result.name}</SearchResultContainer>
  );
};

export default SearchResult;

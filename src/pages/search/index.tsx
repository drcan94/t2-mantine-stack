import React, { useState } from "react";
import { SearchScreenContainer } from "../../components/Searching/SearchResults/styles";
import SearchBar from "../../components/Searching/SearchBar";
import SearchResults from "../../components/Searching/SearchResults";
import { type IUser } from "~/components/Searching/SearchResult";

const SearchScreen: React.FC = () => {
  const [results, setResults] = useState<IUser[]>([]);

  return (
    <SearchScreenContainer>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </SearchScreenContainer>
  );
};

export default SearchScreen;

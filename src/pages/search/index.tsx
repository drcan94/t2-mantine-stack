import React, { useState } from "react";
import { SearchScreenContainer } from "../../components/Searching/SearchResults/styles";
import SearchBar from "../../components/Searching/SearchBar";
import SearchResults from "../../components/Searching/SearchResults";

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

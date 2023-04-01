import styled from "@emotion/styled";
import { type MantineTheme } from '@mantine/core';

export const SearchResultsContainer = styled.div<{theme: MantineTheme}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 300px;
    background-color: ${({theme}) => theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.cyan[0]}; 
    box-shadow: 0 0 8px #ddd;
    overflow-y: scroll;
    margin-top: 1rem;
    border-radius: 10px;
`;


export const SearchScreenContainer = styled.div`
  max-width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
`;

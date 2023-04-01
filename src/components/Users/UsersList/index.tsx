import React from "react";
import { UsersCard } from "./styles";
import { useMantineTheme } from '@mantine/core';

export type UserType = {
  id: string;
  name: string;
  age: number;
};

type UsersListProps = {
  users: UserType[];
};

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const theme = useMantineTheme()
  return (
    <UsersCard theme={theme}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </UsersCard>
  );
};

export default UsersList;

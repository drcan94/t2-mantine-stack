import React from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";
import type { UserType } from "./UsersList/index";


const Users: React.FC = () => {
  const [users, setUsers] = React.useState<UserType[]>([]);

  return (
    <React.Fragment>
      <AddUser setUsers={setUsers} />
      {users.length > 0 && <UsersList users={users} />}
    </React.Fragment>
  );
};

export default Users;

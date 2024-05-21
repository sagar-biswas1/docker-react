import React from "react";

const UserLists = ({ users }) => {
  if (users.length === 0) return <>No users available...</>;
  return (
    <div>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </li>
        );
      })}
    </div>
  );
};

export default UserLists;

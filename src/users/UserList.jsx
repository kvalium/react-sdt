import { useQuery } from "react-query";
import { backEndUrl } from "../configuration";

export const UserList = () => {
  const { isLoading, error, data: users } = useQuery(
    "userList",
    () => fetch(`${backEndUrl}/users`).then((res) => res.json()),
    {
      staleTime: 10000,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.last_name} ${user.first_name}`}</li>
        ))}
      </ul>
    </>
  );
};

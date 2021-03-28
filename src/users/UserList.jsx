import { Link } from "react-router-dom";
import { Loading } from "../form/Loading";
import { useUsers, useDeleteUser } from "./usersApi";

export const UserList = () => {
  const { isLoading, error, data: users } = useUsers();
  const { mutate: deleteUser, isLoading: isDeleting } = useDeleteUser();

  if (isLoading || isDeleting) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1 className="title is-1">Users</h1>
      <Link className="button is-primary" to="/users/new">
        Add new user
      </Link>

      <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

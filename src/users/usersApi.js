import { useQuery } from "react-query";
import { backEndUrl } from "../configuration";

export const useUsers = () =>
  useQuery(
    "userList",
    () => fetch(`${backEndUrl}/users`).then((res) => res.json()),
    {
      staleTime: 10000,
    }
  );

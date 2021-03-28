import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { backEndUrl } from "../configuration";

export const useUsers = () =>
  useQuery("userList", () =>
    axios.get(`${backEndUrl}/users`).then(({ data }) => data)
  );

export const useUser = (id) =>
  useQuery(
    ["user", id],
    () => axios.get(`${backEndUrl}/users/${id}`).then(({ data }) => data),
    {
      enabled: id !== "new",
    }
  );
export const usePersistUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (user) =>
      axios.post(`${backEndUrl}/users`, {
        ...user,
        pin_code: parseInt(user.pin_code),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userList");
      },
    }
  );
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (userId) => axios.delete(`${backEndUrl}/users/${userId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userList");
      },
    }
  );
};

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserList } from "./users/UserList";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

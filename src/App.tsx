import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllNews from "./AllNews";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col min-h-screen snap-y snap-mandatory">
        <AllNews />
      </main>
    </QueryClientProvider>
  );
}

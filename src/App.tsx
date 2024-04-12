import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllNews from "./AllNews";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/toggle";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <main className="flex flex-col h-screen snap-y snap-mandatory overflow-y-scroll y-scroll">
          <AllNews />
        </main>
        <ModeToggle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

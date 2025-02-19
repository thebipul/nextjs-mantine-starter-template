"use client";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";

const RootProvider = ({ children }: { children: ReactNode }) => {
  // initialize queryclient only once https://tkdodo.eu/blog/react-query-fa-qs#2-the-queryclient-is-not-stable
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>{children}</MantineProvider>
    </QueryClientProvider>
  );
};

export default RootProvider;

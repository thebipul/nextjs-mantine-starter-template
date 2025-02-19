import type { ReactNode } from "react";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export default function RootLayout({
  children,
  params: { locale },
}: { children: ReactNode; params: { locale: string } }) {
  return (
    // TODO: find best solution for hydration warning https://github.com/mantinedev/next-app-template/issues/7
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

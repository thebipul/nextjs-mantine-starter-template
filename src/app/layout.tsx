import type { ReactNode } from "react";
import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import RootProvider from "./_layout/RootProvider";

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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

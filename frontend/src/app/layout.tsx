import type { Metadata } from "next";
import './styles/reset.scss'
import { QueryProvider } from "./providers/QueryProvider/QueryProvider";


export const metadata: Metadata = {
  title: "GameStore",
  description: "GameStore progect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

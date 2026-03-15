import type { Metadata } from "next";
import './model/styles/index.scss'
import { QueryProvider } from "./model/providers/QueryProvider/QueryProvider";
import { AuthProvider } from "./model/providers/AuthProvider/AuthProvider";
import { Navbar } from "../widgets/Navbar";


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
        <AuthProvider>
          <QueryProvider>
            <main>
              {children}
            </main>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

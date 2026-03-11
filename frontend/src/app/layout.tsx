import type { Metadata } from "next";
import './styles/index.scss'
import { QueryProvider } from "./providers/QueryProvider/QueryProvider";
import { AuthProvider } from "./providers/AuthProvider/AuthProvider";


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

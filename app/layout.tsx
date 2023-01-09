import CountProvider from "../context/context";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <CountProvider>{children}</CountProvider>
      </body>
    </html>
  );
}

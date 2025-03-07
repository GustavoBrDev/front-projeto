import { Providers } from "./providers";

export default function RootLayout({children}) {
  return (
    <html lang="pt">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

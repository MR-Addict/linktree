import "./globals.css";

import { Navbar, Footer, NextauthProvider } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='min-h-screen flex flex-col items-center justify-between'>
        <NextauthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextauthProvider>
      </body>
    </html>
  );
}

import "./globals.css";

import { Navbar, Footer, NextauthProvider, ScrollToTop } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='dark:bg-dark min-h-screen flex flex-col items-center justify-between'>
        <NextauthProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </NextauthProvider>
      </body>
    </html>
  );
}

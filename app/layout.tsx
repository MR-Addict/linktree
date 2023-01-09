import "./globals.css";

import { Navbar, Footer, NextauthProvider } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='min-h-screen flex flex-col justify-between'>
        <NextauthProvider>
          <div className='flex flex-col'>
            <Navbar />
            {children}
          </div>
          <Footer />
        </NextauthProvider>
      </body>
    </html>
  );
}

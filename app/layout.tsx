import "./globals.css";

import { Navbar, Footer } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='min-h-screen flex flex-col justify-between'>
        <div className='flex flex-col'>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

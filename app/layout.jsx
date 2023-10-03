import Nav from "./Navbar";
import {Providers} from "./providers";
import './global.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
        <Nav/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
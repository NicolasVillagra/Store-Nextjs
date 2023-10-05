
import {Providers} from "./providers";
import './global.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export default function RootLayout({children}) {
  return (
    <html lang="en" className='bg-white'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
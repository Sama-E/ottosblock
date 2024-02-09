import Footer from '../components/Nav/Footer/Footer'
import Navbar from '../components/Nav/Navbar/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Ottos Block',
  description: 'My blog!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
              {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
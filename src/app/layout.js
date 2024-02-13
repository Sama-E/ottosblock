import './globals.css'
import { Open_Sans } from 'next/font/google'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'
import { ThemeContextProvider } from '@/context/ThemeContext'
import Footer from '../components/Nav/Footer/Footer'
import Navbar from '../components/Nav/Navbar/Navbar'


const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Ottos Block',
  description: 'My blog!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <AuthProvider>

          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                    {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>

        </AuthProvider>
      </body>
    </html>
  )
}
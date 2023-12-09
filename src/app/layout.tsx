import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FitnessCheck',
  description: 'Fitness check salud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavBar/>
        </div>
        <div> 
        {children}
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}

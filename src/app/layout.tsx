import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arizona Farm to School Collaborative',
  description: 'A professional learning experience empowering Arizona school teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: Add Navbar here */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
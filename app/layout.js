import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plasencia 2026 - Integrated Marketing Program',
  description: 'A unified year-long brand campaign across Cigar Aficionado print and digital platforms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

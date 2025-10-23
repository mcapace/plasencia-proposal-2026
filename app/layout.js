import { Inter, Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap'
})

export const metadata = {
  title: 'Plasencia 2026 - Premium Marketing Program',
  description: 'An elegant, integrated marketing program that positions Plasencia as the world\'s premier cigar brand through strategic print dominance and sophisticated digital innovation.',
  keywords: 'Plasencia, cigars, marketing, premium, luxury, Cigar Aficionado, digital hub',
  authors: [{ name: 'Plasencia Cigars' }],
  openGraph: {
    title: 'Plasencia 2026 - Premium Marketing Program',
    description: 'An elegant, integrated marketing program for the world\'s premier cigar brand.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${sourceSans.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

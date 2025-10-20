import type { Metadata } from 'next'
import { Geist, Geist_Mono, Bitter, Inter } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import Web3Provider from '@/components/Web3Provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const bitter = Bitter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-bitter',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Brilliant Finance',
  description: 'A decentralized finance platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${bitter.variable} ${inter.variable} antialiased`}
      >
        <Web3Provider>
          <div className="space-y-8">
            <Navbar />
            {children}
          </div>
        </Web3Provider>
      </body>
    </html>
  )
}

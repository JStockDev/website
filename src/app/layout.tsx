import { Silkscreen, Inter } from 'next/font/google'
import Script from 'next/script';
import { Metadata } from 'next';

import icon from '#/icon.png'

import './globals.css'

export const metadata: Metadata = {
  title: 'JStock',
  description: 'My personal website',
}

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-logo'
});
const inter = Inter({ subsets: ["latin"], variable: '--font-main' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${silkscreen.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}

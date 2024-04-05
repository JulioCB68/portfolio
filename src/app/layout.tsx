import type { Metadata } from 'next'

import { robotoMono } from '@/config/font'
import { metaData } from '@/config/meta'

import { ThemeProvider } from '@/providers/theme-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoMono.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

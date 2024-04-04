import type { Metadata } from 'next'

import { robotoMono } from '@/config/font'
import { metaData } from '@/config/meta'

import { ThemeProviders } from '@/providers/theme-provider'
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
    <html lang="en">
      <body className={robotoMono.className}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}

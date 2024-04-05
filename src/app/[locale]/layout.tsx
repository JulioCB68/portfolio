import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { robotoMono } from '@/config/font'
import { metaData } from '@/config/meta'

import { ThemeProvider } from '@/providers/theme-provider'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
}

const locales = ['en', 'pt']

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={robotoMono.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

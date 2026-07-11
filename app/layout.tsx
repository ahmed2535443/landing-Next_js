import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { applyThemeVariables } from './theme'
import { ClerkHeader } from '@/components/clerk-header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NovaFlow | حلول رقمية ذكية للشركات',
  description:
    'منصة رقمية حديثة تساعد الشركات على النمو عبر الأتمتة والتحليلات والخدمات المتكاملة.',
  keywords: ['SaaS', 'تحول رقمي', 'منصة أعمال', 'أتمتة'],
  openGraph: {
    title: 'NovaFlow | حلول رقمية ذكية للشركات',
    description:
      'منصة رقمية حديثة تساعد الشركات على النمو عبر الأتمتة والتحليلات والخدمات المتكاملة.',
    type: 'website',
    url: 'https://novaflow.example.com',
    siteName: 'NovaFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaFlow | حلول رقمية ذكية للشركات',
    description:
      'منصة رقمية حديثة تساعد الشركات على النمو عبر الأتمتة والتحليلات والخدمات المتكاملة.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (typeof window !== 'undefined') {
    applyThemeVariables()
  }

  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900">
        <ClerkHeader />
        {children}
      </body>
    </html>
  )
}

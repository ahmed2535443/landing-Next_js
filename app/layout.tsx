import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { applyThemeVariables } from './theme'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

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
      <ClerkProvider>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
  
        </ClerkProvider>
        </body>
    </html>
  )
}

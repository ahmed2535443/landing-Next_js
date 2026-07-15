'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'

export function Navbar() {
  const { isSignedIn, isLoaded } = useUser()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          {siteConfig.logoText}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {siteConfig.navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition text-lg font-bold hover:text-sky-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {isLoaded && !isSignedIn && (
            <>
              <SignInButton mode="modal">
                <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
                  تسجيل الدخول
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                  أنشئ حساب
                </button>
              </SignUpButton>
            </>
          )}
          {isLoaded && isSignedIn && (
            <UserButton />
          )}
        </div>
      </div>
    </header>
  )
}

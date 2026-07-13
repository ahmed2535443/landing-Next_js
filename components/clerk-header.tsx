'use client'

import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export function ClerkHeader() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignInButton>
        <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
          تسجيل الدخول
        </button>
      </SignInButton>
      <SignUpButton>
        <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
          أنشئ حساب
        </button>
      </SignUpButton>
      <UserButton />
    </header>
  )
}

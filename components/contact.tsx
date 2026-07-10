'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (res.ok) {
      setStatus('success')
      setFeedback('تم إرسال الرسالة بنجاح')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } else {
      setStatus('error')
      setFeedback(data.error || 'فشل الإرسال')
    }
  }

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">{siteConfig.contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{siteConfig.contact.title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{siteConfig.contact.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-sky-500"
              placeholder="الاسم"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-sky-500"
              placeholder="البريد الإلكتروني"
              required
            />
          </div>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-sky-500"
            placeholder="رقم الهاتف"
          />
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-sky-500"
            placeholder="اكتب مشروعك أو احتياجك هنا"
            required
          />
          <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
            {status === 'loading' ? 'جاري الإرسال...' : siteConfig.contact.submitLabel}
          </Button>
          {feedback ? (
            <p className={status === 'success' ? 'text-green-600' : 'text-red-600'}>{feedback}</p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site-config'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="الأسئلة الشائعة"
          title="كل ما تحتاج إلى معرفته قبل البدء"
          description="إجابات قصيرة وواضحة على أكثر التساؤلات شيوعًا حول الحلول والخدمات."
        />

        <div className="mt-14 space-y-4">
          {siteConfig.faqs.map((item, index) => {
            const isOpen = index === openIndex
            return (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
                <button className="flex w-full items-center justify-between gap-4 text-right" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen ? <p className="mt-4 text-slate-600">{item.answer}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

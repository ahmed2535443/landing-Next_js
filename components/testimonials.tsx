import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site-config'

export function Testimonials() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="آراء العملاء"
          title="العملاء يثقون في الحلول التي نقدمها"
          description="تجارب حقيقية تؤكد أن التركيز على الجودة والنتائج يجعل الفرق بين الحل المتوسط والنجاح الحقيقي."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-600">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role} • {item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

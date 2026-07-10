import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site-config'

export function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="الميزات"
          title="أدوات عملية تجعل العمل أسهل وأسرع"
          description="صُممت التقنيات والميزات حول احتياجك الفعلي للتشغيل اليومي والنجاح على المدى الطويل."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-slate-200  bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-30 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <span className="text-xl font-semibold">{feature.icon}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

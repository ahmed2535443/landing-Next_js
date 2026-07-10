import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site-config'

export function Services() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="الخدمات"
          title="حلول متكاملة تغطي كل مرحلة من رحلتك"
          description="من التخطيط الأولي إلى التشغيل المستمر، نوفر لك الدعم والقدرات التي تحتاجها لتحقيق أهدافك."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service) => (
            <article key={service.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-12 w-30 items-center justify-center rounded-xl bg-slate-900 text-sky-400 transition group-hover:scale-110">
                <span className="text-lg font-semibold">{service.icon}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

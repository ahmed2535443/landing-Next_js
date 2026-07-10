import { SectionTitle } from '@/components/section-title'
import { CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="الأسعار"
          title="خطط مرنة تناسب كل مرحلة من النمو"
          description="اختر الخطة التي تناسب احتياجك اليوم، وقم بالترقية لاحقًا دون أي عوائق."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.pricingPlans.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border p-8 shadow-sm ${plan.featured ? 'border-sky-500 bg-slate-900 text-white shadow-xl' : 'border-slate-200 bg-white text-slate-900'}`}>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${plan.featured ? 'text-sky-400' : 'text-sky-600'}`}>{plan.name}</p>
              <p className="mt-4 text-4xl font-semibold">{plan.price}</p>
              <p className={`mt-3 text-sm leading-7 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-5 w-5 ${plan.featured ? 'text-sky-400' : 'text-emerald-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${plan.featured ? 'bg-sky-500 text-white hover:bg-sky-400' : 'bg-slate-900 text-white hover:bg-slate-700'}`}>
                اختر الخطة
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

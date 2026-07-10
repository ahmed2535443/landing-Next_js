import { BadgeCheck, TrendingUp } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { siteConfig } from '@/lib/site-config'

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow={siteConfig.about.eyebrow}
            title={siteConfig.about.title}
            description={siteConfig.about.description}
            align="left"
          />
          <div className="mt-8 space-y-4 text-slate-600">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-sky-500/20 p-2 text-sky-400">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <p className="text-lg font-semibold">{siteConfig.about.mission}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {siteConfig.about.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 p-4 text-center">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-white/10 p-5">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-sky-400" />
              <p className="font-semibold">رؤيتنا</p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{siteConfig.about.vision}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

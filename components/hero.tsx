import { PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8" style={{ background: `linear-gradient(135deg, ${siteConfig.theme.backgroundColor} 0%, ${siteConfig.theme.surfaceColor} 100%)` }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-sm font-medium" style={{ color: siteConfig.theme.primaryColor }}>
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {siteConfig.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full px-6 py-3" style={{ backgroundColor: siteConfig.theme.primaryColor }}>
              <a href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</a>
            </Button>
            <a href={siteConfig.hero.secondaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600">
              <PlayCircle className="h-4 w-4" />
              {siteConfig.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-2xl shadow-slate-200/70">
          <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: siteConfig.theme.accentColor }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{siteConfig.tagline}</p>
                <p className="mt-2 text-3xl font-semibold">{siteConfig.hero.stats[0]?.value}</p>
              </div>
              <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">
                {siteConfig.hero.stats[1]?.value}
              </div>
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl bg-white/10 p-4">
              {siteConfig.hero.stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { BadgeCheck, Globe, MessageCircle, Send } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-12 text-slate-300 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold text-white">{siteConfig.logoText}</p>
          <p className="mt-4 max-w-sm text-sm leading-7">{siteConfig.footer.description}</p>
        </div>
        <div>
          <p className="font-semibold text-white">{siteConfig.footer.quickLinksLabel}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.label}><a href={item.href} className="transition hover:text-sky-400">{item.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">تابعنا</p>
          <div className="mt-4 flex gap-3">
            {siteConfig.footer.socialLinks.map((item, index) => {
              const icons = {
                globe: Globe,
                message: MessageCircle,
                badge: BadgeCheck,
                send: Send,
              }
              const Icon = icons[item.icon]
              return (
                <a key={item.label} href={item.href} className="rounded-full border border-slate-800 p-2 transition hover:border-sky-500 hover:text-sky-400">
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>{siteConfig.footer.copyright}</p>
        <p>تم التصميم مع الاهتمام بالتفاصيل والسرعة.</p>
      </div>
    </footer>
  )
}

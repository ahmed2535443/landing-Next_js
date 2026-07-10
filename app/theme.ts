import { siteConfig } from '@/lib/site-config'

export function applyThemeVariables() {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  root.style.setProperty('--background', siteConfig.theme.backgroundColor)
  root.style.setProperty('--foreground', siteConfig.theme.textColor)
  root.style.setProperty('--primary', siteConfig.theme.primaryColor)
  root.style.setProperty('--primary-foreground', siteConfig.theme.surfaceColor)
  root.style.setProperty('--muted', siteConfig.theme.mutedColor)
  root.style.setProperty('--border', '#e2e8f0')
}

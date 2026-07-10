import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Pricing } from '@/components/pricing'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

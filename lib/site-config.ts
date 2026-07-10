import type { FaqItem, FeatureItem, PricingPlan, ServiceItem, TestimonialItem } from '@/types'

export interface SiteConfig {
  companyName: string
  tagline: string
  logoText: string
  logoImage?: string
  logoAlt: string
  theme: {
    primaryColor: string
    accentColor: string
    backgroundColor: string
    surfaceColor: string
    textColor: string
    mutedColor: string
  }
  navigation: Array<{ label: string; href: string }>
  sections: Array<{ id: string; enabled: boolean }>
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    stats: Array<{ label: string; value: string }>
    imageSrc: string
    imageAlt: string
  }
  features: FeatureItem[]
  about: {
    eyebrow: string
    title: string
    description: string
    paragraphs: string[]
    mission: string
    vision: string
    stats: Array<{ label: string; value: string }>
  }
  services: ServiceItem[]
  testimonials: TestimonialItem[]
  pricingPlans: PricingPlan[]
  faqs: FaqItem[]
  contact: {
    eyebrow: string
    title: string
    description: string
    submitLabel: string
    email: string
    phone: string
    address: string
  }
  footer: {
    description: string
    quickLinksLabel: string
    copyright: string
    socialLinks: Array<{ label: string; href: string; icon: 'globe' | 'message' | 'badge' | 'send' }>
  }
}

export function hexToRgba(hex: string, alpha: number) {
  const sanitized = hex.replace('#', '')
  const normalized = sanitized.length === 3 ? sanitized.split('').map((char) => char + char).join('') : sanitized
  const value = Number.parseInt(normalized, 16)

  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`
}

export const siteConfig: SiteConfig = {
  companyName: 'NovaFlow',
  tagline: 'حلول رقمية ذكية للشركات',
  logoText: 'NovaFlow',
  logoImage: '/brand-mark.svg',
  logoAlt: 'NovaFlow logo',
  theme: {
    primaryColor: '#0284c7',
    accentColor: '#0f172a',
    backgroundColor: '#f8fbff',
    surfaceColor: '#ffffff',
    textColor: '#0f172a',
    mutedColor: '#475569',
  },
  navigation: [
    { label: 'الميزات', href: '#features' },
    { label: 'الخدمات', href: '#services' },
    { label: 'الأسعار', href: '#pricing' },
    { label: 'الأسئلة', href: '#faq' },
  ],
  sections: [
    { id: 'hero', enabled: true },
    { id: 'features', enabled: true },
    { id: 'about', enabled: true },
    { id: 'services', enabled: true },
    { id: 'testimonials', enabled: true },
    { id: 'pricing', enabled: true },
    { id: 'faq', enabled: true },
    { id: 'contact', enabled: true },
  ],
  hero: {
    eyebrow: 'حلول رقمية مصممة للنمو',
    title: 'ارفع مستوى أعمالك باستخدام منصة ذكية وسريعة.',
    description: 'نوفر لك نظامًا متكاملًا يربط العمليات، التحليلات، والتواصل في مكان واحد لتسريع النمو.',
    primaryCta: { label: 'احجز عرضًا تجريبيًا', href: '#pricing' },
    secondaryCta: { label: 'اعرف المزيد', href: '#about' },
    stats: [
      { label: 'العملاء النشطون', value: '3,240' },
      { label: 'الوقت المُوفَّر', value: '42 ساعة/أسبوع' },
    ],
    imageSrc: '/hero-illustration.svg',
    imageAlt: 'لوحة تحكم رقمية توضح نمو الأعمال',
  },
  features: [
    {
      title: 'أتمتة العمليات',
      description: 'أدوات ذكية تقلل الجهد اليدوي وتسرّع سير العمل بوضوح وموثوقية.',
      icon: 'Sparkles',
    },
    {
      title: 'تحليلات لحظية',
      description: 'تابع الأداء الحقيقي لعملك عبر لوحات تحكم بسيطة ومباشرة.',
      icon: 'BarChart3',
    },
    {
      title: 'أمان عالي',
      description: 'نحن نؤمن لعملائك بياناتهم بفضل بنية أمان قوية ومحدثة باستمرار.',
      icon: 'ShieldCheck',
    },
    {
      title: 'توسعة مرنة',
      description: 'أنظمتنا تنمو معك دون تعقيد أو توقف، سواءً كنت شركة صغيرة أو مؤسسة.',
      icon: 'Layers3',
    },
    {
      title: 'دعم 24/7',
      description: 'فريقنا جاهز لمساعدتك في أي لحظة، مع استجابة سريعة واحترافية.',
      icon: 'Headphones',
    },
    {
      title: 'تكامل سهل',
      description: 'يُسهّل النظام ربط أدواتك المختلفة في مكان واحد دون عناء.',
      icon: 'PlugZap',
    },
  ],
  about: {
    eyebrow: 'من نحن',
    title: 'شريك رقمي يربط الأفكار بالنتائج',
    description: 'نساعد الشركات على التحول الرقمي بطرق عملية، واضحة، ومُصممة وفق احتياجاتها الفعلية.',
    paragraphs: [
      'نؤمن أن التكنولوجيا تحتاج إلى فهم عميق لعملك قبل أن تصبح أداة فعالة. لذلك نركز على الحلول التي تكون بسيطة، قوية، وقابلة للنمو.',
      'من خلال التعاون المباشر مع كل عميل، نضمن أن تكون المنصة واقعية ومناسبةً لعملياتهم اليومية.',
    ],
    mission: 'مهمتنا: جعل التكنولوجيا سهلة ومفيدة',
    vision: 'أن نكون الخيار الأول للشركات التي ترغب في بناء عمليات أكثر ذكاءً وفعالية على المدى الطويل.',
    stats: [
      { label: 'عملاء راضون', value: '98%' },
      { label: 'نمو سنوي', value: '3x' },
      { label: 'وقت التنفيذ', value: '14 يوم' },
    ],
  },
  services: [
    {
      title: 'استشارات استراتيجية',
      description: 'نساعدك على بناء خطة رقمية واضحة تلائم أهدافك واحتياجات السوق.',
      icon: 'Compass',
    },
    {
      title: 'تطوير منصات السحب',
      description: 'نبني حلولاً مرنة وسريعة تناسب نمو الأعمال وتوفر تجربة ممتازة.',
      icon: 'Rocket',
    },
    {
      title: 'تحسين العمليات',
      description: 'نحسّن سير العمل الداخلي لتوفير الوقت وتقليل التكاليف بشكل فعّال.',
      icon: 'Workflow',
    },
    {
      title: 'إدارة البيانات',
      description: 'نرتّب وننظّم بياناتك لتصبح أكثر فائدة ووضوحًا في اتخاذ القرار.',
      icon: 'Database',
    },
    {
      title: 'تحسين الأداء',
      description: 'نرفع سرعة النظام وأدائه عبر تحسينات تقنية دقيقة ومستدامة.',
      icon: 'Gauge',
    },
    {
      title: 'دعم مستمر',
      description: 'نرافقك بعد الإطلاق لضمان استقرار موقعك ومنصتك على مدار الوقت.',
      icon: 'LifeBuoy',
    },
  ],
  testimonials: [
    {
      name: 'سارة الحربي',
      role: 'مديرة عمليات',
      company: 'نقطة التقنية',
      quote: 'منذ استخدام النظام، انخفضت أعباء العمل اليومية بشكل واضح وازداد دقة التقارير.',
    },
    {
      name: 'أحمد المنيع',
      role: 'مدير تطوير',
      company: 'برودكتفا',
      quote: 'الواجهة ممتازة والسرعة كانت مذهلة، وأصبح فريقنا يعمل بطريقة أكثر تنظيمًا.',
    },
    {
      name: 'منى الزهراني',
      role: 'الرئيس التنفيذي',
      company: 'أوبتيميا',
      quote: 'المنتج ساعدنا على نمو أعمالنا بسرعة مع الحفاظ على جودة الخدمة ورضا العملاء.',
    },
  ],
  pricingPlans: [
    {
      name: 'الأساسي',
      price: '$29',
      description: 'مثالي للمشاريع الصغيرة والفرق الناشئة.',
      features: ['لوحة تحكم أساسية', 'دعم عبر البريد', 'تحديثات شهرية'],
    },
    {
      name: 'الاحترافي',
      price: '$89',
      description: 'الأفضل للشركات التي تحتاج مرونة وعمليات أوسع.',
      features: ['كل ما في الخطة الأساسية', 'تحليلات متقدمة', 'دعم مخصص'],
      featured: true,
    },
    {
      name: 'المؤسسي',
      price: '$199',
      description: 'حل شامل للمنظمات ذات الاحتياجات المعقدة.',
      features: ['كل ما في الخطة الاحترافية', 'تكاملات مخصصة', 'خيار SLA'],
    },
  ],
  faqs: [
    {
      question: 'هل يمكنني البدء بسرعة دون خبرة تقنية كبيرة؟',
      answer: 'نعم، المنصة مصممة لتكون واضحة وسهلة الاستخدام حتى للمستخدمين الجدد.',
    },
    {
      question: 'هل توجد نسخة تجريبية؟',
      answer: 'نعم، يمكن طلب نسخة تجريبية مجانية لمدة 14 يومًا مع كامل الميزات الأساسية.',
    },
    {
      question: 'هل يدعم النظام التوسع؟',
      answer: 'بالتأكيد، الحل قابل للتوسعة مع نمو الفريق والعمليات.',
    },
    {
      question: 'كيف يكون الدعم؟',
      answer: 'يوفر فريقنا دعمًا سريعًا عبر البريد والاتصال المباشر حسب الخطة.',
    },
  ],
  contact: {
    eyebrow: 'تواصل معنا',
    title: 'ابدأ المشروع الذي سيقودك إلى الخطوة التالية',
    description: 'املأ النموذج وسنعود إليك خلال يوم عمل واحد مع خطة مناسبة لأهدافك.',
    submitLabel: 'أرسل الطلب',
    email: 'hello@novaflow.com',
    phone: '+966 50 123 4567',
    address: 'الرياض، المملكة العربية السعودية',
  },
  footer: {
    description: 'نحو حلول رقمية فعالة، مبنية على الثقة والسرعة والاحترافية.',
    quickLinksLabel: 'روابط سريعة',
    copyright: '© 2026 NovaFlow. جميع الحقوق محفوظة.',
    socialLinks: [
      { label: 'الموقع', href: '#', icon: 'globe' },
      { label: 'الدردشة', href: '#', icon: 'message' },
      { label: 'التحقق', href: '#', icon: 'badge' },
      { label: 'الإرسال', href: '#', icon: 'send' },
    ],
  },
}

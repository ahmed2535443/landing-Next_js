export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

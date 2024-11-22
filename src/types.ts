export type DarkMode = "dark" | "light";

export interface Feature {
  id: string;
  header: string;
  description: string;
  url: string;
}

export interface Offer {
  header: string;
  description: string;
}

export interface Project {
  image: ImageMetadata;
  alt: string;
  header: string;
  description: string;
  url: string;
}

export interface ProcessStep {
  id: string;
  header: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: ImageMetadata;
  url: string;
}

export interface PricingPackage {
  name: string;
  price: number;
  priceDescription: string;
  features: PackageFeature[];
}

export interface PackageFeature {
  name: string;
  included: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export enum FAQCategory {
  PRICING = "Pricing",
  PLANS = "Plans",
  WEBSITES = "Websites",
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

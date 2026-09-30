export type Language = 'vi' | 'en';

export interface Service {
  id: string;
  name: string;
  nameEn?: string;
  category: 'facial' | 'body' | 'headspa' | 'rejuvenate' | 'whitening';
  durationMinutes: number;
  price: number;
  price60?: number;
  price90?: number;
  isAddon?: boolean;
  isGift?: boolean;
  giftText?: string;
  giftTextEn?: string;
  originalPrice?: number;
  image: string;
  shortDesc: string;
  shortDescEn?: string;
  description: string;
  descriptionEn?: string;
  steps: string[];
  stepsEn?: string[];
  benefits: string[];
  benefitsEn?: string[];
  isHot?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  city: 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Huế';
  address: string;
  addressEn?: string;
  hotline: string;
  hours: string;
  hoursEn?: string;
  mapEmbedUrl?: string;
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  titleEn?: string;
  experience: string;
  specialty: string;
  specialtyEn?: string;
  avatar: string;
  bio: string;
  bioEn?: string;
}

export interface PackageCombo {
  id: string;
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  duration: string;
  durationEn?: string;
  price: number;
  originalPrice: number;
  features: string[];
  featuresEn?: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  customerName: string;
  role: string;
  roleEn?: string;
  rating: number;
  serviceUsed: string;
  serviceUsedEn?: string;
  comment: string;
  commentEn?: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  date: string;
  readTime: string;
  readTimeEn?: string;
  excerpt: string;
  excerptEn?: string;
  image: string;
  content: string[];
  contentEn?: string[];
}

export interface BookingRecord {
  id: string;
  bookingCode: string;
  customerName: string;
  phone: string;
  email?: string;
  serviceId: string;
  serviceName: string;
  branchId: string;
  branchName: string;
  specialistId: string;
  specialistName: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
  discountApplied?: number;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Service {
  id: string;
  name: string;
  category: 'facial' | 'body' | 'headspa' | 'rejuvenate' | 'whitening';
  durationMinutes: number;
  price: number;
  price60?: number;
  price90?: number;
  isAddon?: boolean;
  originalPrice?: number;
  image: string;
  shortDesc: string;
  description: string;
  steps: string[];
  benefits: string[];
  isHot?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  city: 'Hà Nội' | 'TP. Hồ Chí Minh';
  address: string;
  hotline: string;
  hours: string;
  mapEmbedUrl?: string;
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  avatar: string;
  bio: string;
}

export interface PackageCombo {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  originalPrice: number;
  features: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  customerName: string;
  role: string;
  rating: number;
  serviceUsed: string;
  comment: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
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

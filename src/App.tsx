/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { QuickBookingBar } from './components/QuickBookingBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ReviewsSection } from './components/ReviewsSection';
import { FacilityGallerySection } from './components/FacilityGallerySection';
import { BlogSection } from './components/BlogSection';
import { BranchSection } from './components/BranchSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Service } from './types';
import { SPA_INFO } from './data/spaData';

export default function App() {
  const [detailService, setDetailService] = useState<Service | null>(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const handleDirectCall = () => {
    window.location.href = `tel:${SPA_INFO.hotlineRaw}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EA] text-[#382415] selection:bg-[#C29661]/30 selection:text-[#523013]">
      {/* Top Bar Navigation */}
      <TopBar onDirectCall={handleDirectCall} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onDirectCall={handleDirectCall}
          onOpenConsult={() => setIsConsultOpen(true)}
        />

        {/* Quick Contact & Consultation Bar */}
        <QuickBookingBar />

        {/* About & Philosophy */}
        <AboutSection />

        {/* Services & Treatment Protocols with Direct Call */}
        <ServicesSection
          onSelectServiceDetail={(service) => setDetailService(service)}
        />

        {/* Reviews & Testimonials from Customers */}
        <ReviewsSection />

        {/* Real Facility & Space Gallery */}
        <FacilityGallerySection />

        {/* Single Branch / Address in Vy Da, Hue with Google Maps Link */}
        <BranchSection />

        {/* Blog & Health Tips */}
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & Zalo Actions */}
      <FloatingActions />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
      />

      {/* Quick Consultation Symptom Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </div>
  );
}

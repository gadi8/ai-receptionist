import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { HeroSection } from '@/sections/Hero';
import { ServicesSection } from '@/sections/Services';
import { TestimonialsSection } from '@/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <ServiceSection />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}

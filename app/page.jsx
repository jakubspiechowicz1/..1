// Zakładając, że masz komponent AccessibilityWidget
import AccessibilityWidget from '@/components/Access/AccessibilityWidget'; // Załóżmy, że Twój komponent wtyczki dostępności znajduje się tutaj
import React from 'react';
// Reszta Twoich importów komponentów
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
      <AccessibilityWidget />
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
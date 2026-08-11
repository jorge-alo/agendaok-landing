// src/app/page.tsx
import Contact from '@/components/Contact/Contact';
import FAQ from '@/components/Faq/Faq';
import Features from '@/components/Features/Features';
import Hero from '@/components/Hero/Hero';
import Pricing from '@/components/Pricing/Pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      {/* Aquí agregaremos las demás secciones en los próximos pasos */}
    </main>
  );
}

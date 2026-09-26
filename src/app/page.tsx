import PricingPackages from "@/components/PricingPackages";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import Projects from "@/components/Projects"; 
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";


export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Leadership />
      <Services />
      <Projects />      
      <Process />
      <WhyUs />
      <FAQ />
      <CTA />
      <PricingPackages />
    </main>
  );
}
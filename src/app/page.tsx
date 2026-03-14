import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

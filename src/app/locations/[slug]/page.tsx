import { counties } from "@/lib/locations";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MapPin, CalendarPlus, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const county = counties.find((c) => c.slug === slug);

  if (!county) return {};

  return {
    title: `NEMT & Waiver Transportation in ${county.name}, MN`,
    description: county.description,
    alternates: {
      canonical: `/locations/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return counties.map((county) => ({
    slug: county.slug,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const county = counties.find((c) => c.slug === slug);

  if (!county) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#FAFAF8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lime/5 -z-0 rounded-l-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <nav className="flex items-center gap-2 text-sm font-medium text-text-muted mb-6">
                <Link href="/" className="hover:text-brand-lime transition-colors">Home</Link>
                <CaretRight size={14} />
                <span className="text-foreground">Locations</span>
                <CaretRight size={14} />
                <span className="text-brand-lime">{county.name}</span>
              </nav>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                Reliable Transportation in <span className="text-brand-lime">{county.name}</span>
              </h1>
              
              <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-2xl">
                {county.description} We specialize in Non-Emergency Medical Transportation (NEMT) 
                and waiver-based services tailored to your specific needs in {county.name}.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:6128889966"
                  className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-primary-pressed transition-all"
                >
                  <PhoneCall weight="duotone" size={24} />
                  Book a Ride
                </a>
                <a
                  href="/#referral"
                  className="flex items-center justify-center gap-2 bg-white text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-muted transition-all"
                >
                  <CalendarPlus weight="duotone" size={24} />
                  Make a Referral
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/hero.png" // Reusing hero image for consistency
                  alt={`NEMT Services in ${county.name}`}
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Cities We Serve in {county.name}</h2>
            <p className="text-lg text-text-muted">We provide full coverage across all communities, including:</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {county.cities.map((city) => (
              <div key={city} className="bg-white p-6 rounded-2xl border border-border flex items-center gap-4 hover:border-brand-lime transition-colors group">
                <div className="w-10 h-10 bg-brand-lime/10 rounded-full flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-white transition-colors">
                  <MapPin size={20} weight="duotone" />
                </div>
                <span className="font-bold text-lg">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-8">Ready to Schedule Your Visit?</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed">
            Our specialized fleet is ready to serve {county.name} residents with the professional care 
            and punctuality you deserve. We coordinate directly with waiver programs to ensure 
            seamless transportation for your medical appointments and day programs.
          </p>
          <a
            href="tel:6128889966"
            className="inline-flex items-center gap-4 bg-brand-lime text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <PhoneCall weight="duotone" size={28} />
            Call (612)-888-9966
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

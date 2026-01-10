import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata = {
  title: "Bay Area String Ensembles Open House - Sat, Jan 31st",
  description:
    "Join us for the Bay Area String Ensembles Open House to learn more about the new program for Friendswood, FISD, CCISD, Leaguee City, and Webster. Meet Director Lyndon Wang and learn about our new programs.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-[var(--font-inter)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0f172a]/90 backdrop-blur-md border-b border-[#d4a574]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              alt="BLE Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg text-white">Bay Area String Ensembles</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-white/70 hover:text-[#d4a574] transition-colors">
              About
            </a>
            <a href="#instruments" className="text-white/70 hover:text-[#d4a574] transition-colors">
              Instruments
            </a>
            <a href="#details" className="text-white/70 hover:text-[#d4a574] transition-colors">
              Details
            </a>
            <a
              href="#register"
              className="px-5 py-2 bg-[#d4a574] text-[#0f172a] rounded-full hover:bg-[#e8c9a0] transition-colors font-medium"
            >
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a]" />

        {/* Mobile background image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/60" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#1e3a5f]/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[#d4a574]/10 rounded-full mb-6">
              <p className="text-[#d4a574] text-sm font-medium">
                Sat, January 31st, 2025 | 10am - 12pm
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Open House</span>
              <br />
              <span className="text-[#d4a574] font-[var(--font-playfair)] italic">
                Friendswood Strings Program
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Join us for the Bay Area String Ensembles Open House. Meet our
              director, explore the instruments, and find out if you're ready to start.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="px-8 py-4 bg-[#d4a574] text-[#0f172a] font-semibold rounded-xl hover:bg-[#e8c9a0] transition-all duration-200 text-center shadow-lg shadow-[#d4a574]/20"
              >
                Register for Free
              </a>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-[#d4a574]/30 text-[#d4a574] rounded-xl hover:bg-[#d4a574]/5 transition-all duration-200 text-center"
              >
                Meet the Director
              </a>
            </div>
          </div>

          {/* Hero Image - Desktop only */}
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1e3a5f] to-[#d4a574] p-1">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="String instruments"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section id="about" className="py-24 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Director Image */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-[#d4a574]/20">
                <Image
                  src="/headshot.png"
                  alt="Director Lyndon Wang"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Quote card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#d4a574] text-[#0f172a] p-6 rounded-2xl max-w-xs shadow-xl">
                <p className="italic leading-relaxed">
                  &quot;Music is so exciting to me, and it's a joy to share that excitment with new students&quot;
                </p>
                <p className="mt-3 text-sm opacity-70">— Lyndon Wang</p>
              </div>
            </div>

            {/* Director Info */}
            <div className="order-1 md:order-2">
              <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4 font-medium">
                Our Director
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Meet Lyndon Wang
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  As the director of Bay Area String Ensembles, Lyndon Wang has
                  dedicated his career to nurturing young musicians and building
                  a supportive community for string education.
                </p>
                <p>
                  At the open house, you&apos;ll have the opportunity to meet Lyndon
                  personally, ask questions about the program, and learn about
                  our approach to music education.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {["Violin", "Viola", "Cello"].map((instrument) => (
                  <span
                    key={instrument}
                    className="px-4 py-2 bg-[#d4a574]/10 text-[#d4a574] rounded-full text-sm font-medium border border-[#d4a574]/20"
                  >
                    {instrument}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section id="instruments" className="py-24 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4 font-medium">
              Find Your Voice
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Explore Our Instruments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Violin",
                tagline: "The Storyteller",
                description:
                  "Express yourself through the violin's soaring melodies and versatile range.",
              },
              {
                name: "Viola",
                tagline: "The Heart",
                description:
                  "Discover the viola's warm, rich voice that adds depth to any ensemble.",
              },
              {
                name: "Cello",
                tagline: "The Foundation",
                description:
                  "Ground yourself in the cello's powerful, resonant tones.",
              },
            ].map((instrument) => (
              <div
                key={instrument.name}
                className="group bg-[#1e293b] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#d4a574]/10 hover:border-[#d4a574]/30"
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl bg-[#d4a574]/10"
                >
                  🎻
                </div>
                <p
                  className="text-sm font-medium mb-2 text-[#d4a574]"
                >
                  {instrument.tagline}
                </p>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#d4a574] transition-colors">
                  {instrument.name}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {instrument.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50 bg-[#d4a574]/10 inline-block px-6 py-3 rounded-full">
              Not sure? We&apos;ll help you choose at the open house!
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-24 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4 font-medium">
              Mark Your Calendar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Event Details</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f172a]/50 backdrop-blur rounded-3xl p-8 text-center border border-[#d4a574]/10">
              <div className="w-16 h-16 rounded-full bg-[#d4a574] mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Date & Time</h3>
              <p className="text-white/80">Saturday, January 31st</p>
              <p className="text-white/80">10:00 AM - 12:00 PM</p>
            </div>

            <div className="bg-[#0f172a]/50 backdrop-blur rounded-3xl p-8 text-center border border-[#d4a574]/10">
              <div className="w-16 h-16 rounded-full bg-[#d4a574] mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-white/80">BLE Studios</p>
              <p className="text-white/80">3222 FM 528</p>
              <p className="text-white/80">Friendswood, TX 77546</p>
            </div>

            <div className="bg-[#0f172a]/50 backdrop-blur rounded-3xl p-8 text-center border border-[#d4a574]/10">
              <div className="w-16 h-16 rounded-full bg-[#d4a574] mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">What&apos;s Included</h3>
              <p className="text-white/80">Free admission</p>
              <p className="text-white/80">Rental info available</p>
              <p className="text-white/80">All levels welcome</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://maps.app.goo.gl/W5sVkbBEhUsYq39E7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a574] text-[#0f172a] rounded-full font-medium hover:bg-[#e8c9a0] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-[#0f172a]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4 font-medium">
              Join Our Community
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Register Today
            </h2>
            <p className="text-white/60 text-lg">
              Take the first step in your child&apos;s musical journey.
            </p>
          </div>

          <div className="bg-[#1e293b] rounded-3xl p-8 shadow-xl border border-[#d4a574]/10">
            <RegistrationForm
              theme="dark"
              accentColor="#d4a574"
              buttonBgColor="#d4a574"
              buttonTextColor="#0f172a"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0f1a] text-white border-t border-[#d4a574]/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            
           
          </div>
          <p className="text-white/60 mb-4">Bay Area String Ensembles</p>
          <p className="text-white/40 text-sm">
            Best Lesson Ever | 3222 FM 528, Friendswood, TX 77546
          </p>
        </div>
      </footer>
    </div>
  );
}

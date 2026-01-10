import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata = {
  title: "BASE Open House - January 31st | Bay Area String Ensembles",
  description:
    "Join us for the BASE Open House and discover the joy of string music. Meet Director Lyndon Wang and learn about violin, viola, and cello programs.",
};

export default function WarmResonancePage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2d1f1f] font-[var(--font-inter)]">
      {/* Back to showcase link */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c2d36] text-white hover:bg-[#9f3d47] transition-all text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Options
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#7c2d36]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c2d36] to-[#f59e0b] flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="font-bold text-xl text-[#7c2d36]">BASE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-[#2d1f1f]/70 hover:text-[#7c2d36] transition-colors">
              About
            </a>
            <a href="#instruments" className="text-[#2d1f1f]/70 hover:text-[#7c2d36] transition-colors">
              Instruments
            </a>
            <a href="#details" className="text-[#2d1f1f]/70 hover:text-[#7c2d36] transition-colors">
              Details
            </a>
            <a
              href="#register"
              className="px-5 py-2 bg-[#7c2d36] text-white rounded-full hover:bg-[#9f3d47] transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f2] via-[#fff5eb] to-[#fce7d6]" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#7c2d36]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[#7c2d36]/10 rounded-full mb-6">
              <p className="text-[#7c2d36] text-sm font-medium">
                January 31st, 2025 | 10am - 12pm
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-[#2d1f1f]">Discover the</span>
              <br />
              <span className="text-[#7c2d36] font-[var(--font-playfair)] italic">
                Joy of Music
              </span>
            </h1>

            <p className="text-xl text-[#2d1f1f]/70 mb-8 leading-relaxed">
              Join us for the Bay Area String Ensembles Open House. Meet our
              director, explore instruments, and start your musical journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="px-8 py-4 bg-[#7c2d36] text-white font-semibold rounded-xl hover:bg-[#9f3d47] transition-all duration-200 text-center shadow-lg shadow-[#7c2d36]/20"
              >
                Register for Free
              </a>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-[#7c2d36]/30 text-[#7c2d36] rounded-xl hover:bg-[#7c2d36]/5 transition-all duration-200 text-center"
              >
                Meet the Director
              </a>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#7c2d36] to-[#f59e0b] p-1">
              <div className="w-full h-full rounded-3xl bg-[#faf7f2] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🎻</div>
                  <p className="text-[#7c2d36]/40 text-sm">Hero Image</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <p className="font-bold text-[#2d1f1f]">All Levels</p>
                  <p className="text-sm text-[#2d1f1f]/60">Welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Director Image */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-b from-[#fce7d6] to-[#f59e0b]/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-[#7c2d36]/10 mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-[#7c2d36]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#7c2d36]/40 text-sm">Director Photo</p>
                  </div>
                </div>
              </div>
              {/* Quote card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#7c2d36] text-white p-6 rounded-2xl max-w-xs shadow-xl">
                <p className="italic text-white/90 leading-relaxed">
                  &quot;Every child has the potential to create beautiful music.&quot;
                </p>
                <p className="mt-3 text-sm text-white/60">— Lyndon Wang</p>
              </div>
            </div>

            {/* Director Info */}
            <div className="order-1 md:order-2">
              <p className="text-[#f59e0b] text-sm uppercase tracking-widest mb-4 font-medium">
                Your Guide to Musical Excellence
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d1f1f]">
                Meet Lyndon Wang
              </h2>
              <div className="space-y-4 text-[#2d1f1f]/70 text-lg leading-relaxed">
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
                    className="px-4 py-2 bg-[#7c2d36]/10 text-[#7c2d36] rounded-full text-sm font-medium"
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
      <section id="instruments" className="py-24 bg-gradient-to-b from-[#faf7f2] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#f59e0b] text-sm uppercase tracking-widest mb-4 font-medium">
              Find Your Voice
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f1f]">
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
                color: "#7c2d36",
              },
              {
                name: "Viola",
                tagline: "The Heart",
                description:
                  "Discover the viola's warm, rich voice that adds depth to any ensemble.",
                color: "#f59e0b",
              },
              {
                name: "Cello",
                tagline: "The Foundation",
                description:
                  "Ground yourself in the cello's powerful, resonant tones.",
                color: "#7c2d36",
              },
            ].map((instrument) => (
              <div
                key={instrument.name}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#7c2d36]/5"
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${instrument.color}15` }}
                >
                  🎻
                </div>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: instrument.color }}
                >
                  {instrument.tagline}
                </p>
                <h3 className="text-2xl font-bold mb-3 text-[#2d1f1f] group-hover:text-[#7c2d36] transition-colors">
                  {instrument.name}
                </h3>
                <p className="text-[#2d1f1f]/60 leading-relaxed">
                  {instrument.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#2d1f1f]/50 bg-[#f59e0b]/10 inline-block px-6 py-3 rounded-full">
              Not sure? We&apos;ll help you choose at the open house!
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-24 bg-[#7c2d36] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#f59e0b] text-sm uppercase tracking-widest mb-4 font-medium">
              Mark Your Calendar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Event Details</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f59e0b] mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Date & Time</h3>
              <p className="text-white/80">Saturday, January 31st</p>
              <p className="text-white/80">10:00 AM - 12:00 PM</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f59e0b] mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-white/80">BLE Studios</p>
              <p className="text-white/80">3222 FM 528</p>
              <p className="text-white/80">Friendswood, TX 77546</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f59e0b] mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">What&apos;s Included</h3>
              <p className="text-white/80">Free admission</p>
              <p className="text-white/80">Rental info available</p>
              <p className="text-white/80">All levels welcome</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://maps.google.com/?q=3222+FM+528+Friendswood+TX+77546"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7c2d36] rounded-full font-medium hover:bg-[#f59e0b] hover:text-white transition-colors"
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
      <section id="register" className="py-24 bg-[#faf7f2]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#f59e0b] text-sm uppercase tracking-widest mb-4 font-medium">
              Join Our Community
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2d1f1f]">
              Register Today
            </h2>
            <p className="text-[#2d1f1f]/60 text-lg">
              Take the first step in your child&apos;s musical journey.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#7c2d36]/10">
            <RegistrationForm
              theme="warm"
              accentColor="#7c2d36"
              buttonBgColor="#7c2d36"
              buttonTextColor="#ffffff"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2d1f1f] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c2d36] to-[#f59e0b] flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="font-bold text-xl">BASE</span>
          </div>
          <p className="text-white/60 mb-4">Bay Area String Ensembles</p>
          <p className="text-white/40 text-sm">
            BLE Studios | 3222 FM 528, Friendswood, TX 77546
          </p>
        </div>
      </footer>
    </div>
  );
}

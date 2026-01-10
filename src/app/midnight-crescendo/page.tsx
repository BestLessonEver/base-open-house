import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata = {
  title: "BASE Open House - January 31st | Bay Area String Ensembles",
  description:
    "Join us for the BASE Open House and discover the joy of string music. Meet Director Lyndon Wang and learn about violin, viola, and cello programs.",
};

export default function MidnightCrescendoPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-[var(--font-inter)]">
      {/* Back to showcase link */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20 transition-all text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Options
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a]" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <p className="text-[#d4a574] text-sm uppercase tracking-[0.3em] mb-6 font-medium">
              Bay Area String Ensembles presents
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="block text-white">Open House</span>
            <span className="block text-[#d4a574] font-[var(--font-playfair)] italic mt-2">
              2025
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-4 animate-fade-in-up animation-delay-100">
            Saturday, January 31st | 10am - 12pm
          </p>

          <p className="text-lg text-white/50 mb-10 animate-fade-in-up animation-delay-200">
            BLE Studios, Friendswood, TX
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <a
              href="#register"
              className="px-8 py-4 bg-[#d4a574] text-[#0f172a] font-semibold rounded-lg hover:bg-[#e8c9a0] transition-all duration-200 text-lg"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200 text-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Director Section */}
      <section id="about" className="py-24 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Director Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-[#d4a574]/20 mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-[#d4a574]"
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
                    <p className="text-white/40 text-sm">Director Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#d4a574]/30 rounded-2xl -z-10" />
            </div>

            {/* Director Info */}
            <div>
              <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4">
                Meet Your Director
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lyndon Wang
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  With years of dedicated experience in string education, Lyndon Wang
                  brings passion and expertise to every student at BASE.
                </p>
                <p>
                  Our program focuses on building strong foundations while nurturing
                  a lifelong love for music. Whether your child is picking up an
                  instrument for the first time or looking to advance their skills,
                  BASE provides the perfect environment for growth.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#d4a574]">3</p>
                  <p className="text-white/50 text-sm mt-1">Instruments</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#d4a574]">All</p>
                  <p className="text-white/50 text-sm mt-1">Skill Levels</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#d4a574]">1:1</p>
                  <p className="text-white/50 text-sm mt-1">Attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4">
              Our Instruments
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Choose Your Path
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Violin",
                description:
                  "The versatile voice of the string family. Perfect for melodic expression and ensemble playing.",
                icon: "🎻",
              },
              {
                name: "Viola",
                description:
                  "Rich, warm tones that bridge the violin and cello. A unique voice in any ensemble.",
                icon: "🎻",
              },
              {
                name: "Cello",
                description:
                  "Deep, resonant sounds that form the foundation of string music. Powerful and expressive.",
                icon: "🎻",
              },
            ].map((instrument) => (
              <div
                key={instrument.name}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#d4a574]/30 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{instrument.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#d4a574] transition-colors">
                  {instrument.name}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {instrument.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50">
              Not sure which instrument is right? No problem! We&apos;ll help you
              decide at the open house.
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-24 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4">
                Event Details
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Join Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#d4a574]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#d4a574]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Date & Time</h3>
                    <p className="text-white/60">
                      Saturday, January 31st, 2025
                      <br />
                      10:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#d4a574]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#d4a574]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                    <p className="text-white/60">
                      BLE Studios
                      <br />
                      3222 FM 528
                      <br />
                      Friendswood, TX 77546
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#d4a574]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#d4a574]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Good to Know</h3>
                    <p className="text-white/60">
                      Free admission
                      <br />
                      Instrument rental info available
                      <br />
                      All skill levels welcome
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-[#0f172a] h-[400px] flex items-center justify-center border border-white/10">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-white/20 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-white/40">Google Maps Integration</p>
                <a
                  href="https://maps.google.com/?q=3222+FM+528+Friendswood+TX+77546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#d4a574] hover:text-[#e8c9a0] transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-[#0f172a]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4a574] text-sm uppercase tracking-widest mb-4">
              Reserve Your Spot
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Register Now
            </h2>
            <p className="text-white/60 text-lg">
              Spaces are limited. Secure your family&apos;s spot at the BASE Open
              House.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10">
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
      <footer className="py-12 bg-[#0a0f1a] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold text-[#d4a574]">BASE</span>
          </div>
          <p className="text-white/40 mb-4">Bay Area String Ensembles</p>
          <p className="text-white/30 text-sm">
            BLE Studios | 3222 FM 528, Friendswood, TX 77546
          </p>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata = {
  title: "BASE Open House - January 31st | Bay Area String Ensembles",
  description:
    "Join us for the BASE Open House and discover the joy of string music. Meet Director Lyndon Wang and learn about violin, viola, and cello programs.",
};

export default function ModernHarmonyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-[var(--font-inter)]">
      {/* Back to showcase link */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0a] text-white hover:bg-[#2563eb] transition-all text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Options
        </Link>
      </div>

      {/* Hero Section - Split Screen */}
      <section className="min-h-screen grid md:grid-cols-2">
        {/* Left - Content */}
        <div className="flex items-center justify-center p-8 md:p-16 order-2 md:order-1">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <p className="font-bold text-lg">BASE</p>
                <p className="text-xs text-[#0a0a0a]/50 uppercase tracking-wider">
                  Bay Area String Ensembles
                </p>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Open House
              <span className="block text-[#2563eb]">2025</span>
            </h1>

            <div className="flex items-center gap-4 mb-6 text-[#0a0a0a]/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>Jan 31</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>10am - 12pm</span>
              </div>
            </div>

            <p className="text-xl text-[#0a0a0a]/60 mb-10 leading-relaxed">
              Discover string instruments. Meet our director. Start your
              musical journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-[#2563eb] transition-all duration-200 text-center"
              >
                Register Now
              </a>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-[#0a0a0a]/10 text-[#0a0a0a] rounded-xl hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-200 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="bg-[#0a0a0a] flex items-center justify-center p-8 order-1 md:order-2 min-h-[50vh] md:min-h-screen">
          <div className="text-center">
            <div className="relative">
              {/* Abstract visual */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#2563eb] flex items-center justify-center">
                    <span className="text-6xl md:text-7xl">🎻</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#2563eb]" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 rounded-full border-2 border-[#2563eb]" />
            </div>
            <p className="text-white/40 mt-8 text-sm uppercase tracking-widest">
              Violin • Viola • Cello
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#f8f8f8] border-y border-[#0a0a0a]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#0a0a0a]">3</p>
              <p className="text-sm text-[#0a0a0a]/50 mt-1">Instruments</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0a0a0a]">All</p>
              <p className="text-sm text-[#0a0a0a]/50 mt-1">Skill Levels</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0a0a0a]">Free</p>
              <p className="text-sm text-[#0a0a0a]/50 mt-1">Admission</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#2563eb]">1</p>
              <p className="text-sm text-[#0a0a0a]/50 mt-1">Great Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="md:col-span-5">
              <div className="aspect-square bg-[#f8f8f8] rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-[#0a0a0a]/5 mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-[#0a0a0a]/20"
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
                    <p className="text-[#0a0a0a]/30 text-sm">Director Photo</p>
                  </div>
                </div>
                {/* Blue accent corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563eb]" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7">
              <p className="text-[#2563eb] text-sm uppercase tracking-widest mb-4 font-medium">
                Meet Your Director
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lyndon Wang
              </h2>
              <div className="space-y-4 text-[#0a0a0a]/70 text-lg leading-relaxed">
                <p>
                  With a passion for music education and years of experience
                  teaching string instruments, Lyndon Wang leads BASE with
                  dedication to each student&apos;s growth.
                </p>
                <p>
                  At the open house, Lyndon will share his teaching philosophy,
                  answer your questions, and help you understand if BASE is the
                  right fit for your family.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0a0a0a]/70">Expert Instruction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0a0a0a]/70">Individual Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0a0a0a]/70">Supportive Environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-[#2563eb] text-sm uppercase tracking-widest mb-4 font-medium">
              Choose Your Instrument
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Three paths to musical expression
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                name: "Violin",
                description: "Versatile and expressive. The most popular choice for beginners.",
                size: "Smallest",
              },
              {
                name: "Viola",
                description: "Warm, rich tones. A unique voice that stands out.",
                size: "Medium",
              },
              {
                name: "Cello",
                description: "Deep and resonant. Play seated with a full, powerful sound.",
                size: "Largest",
              },
            ].map((instrument, index) => (
              <div
                key={instrument.name}
                className="bg-[#0a0a0a] p-10 group hover:bg-[#2563eb] transition-colors duration-300"
              >
                <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all">
                  🎻
                </div>
                <p className="text-white/40 text-sm mb-2 group-hover:text-white/70 transition-colors">
                  0{index + 1} — {instrument.size}
                </p>
                <h3 className="text-2xl font-bold mb-4">{instrument.name}</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors">
                  {instrument.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 mt-8">
            Unsure which instrument? We&apos;ll help you decide at the open house.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#2563eb] text-sm uppercase tracking-widest mb-4 font-medium">
                Event Information
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                The Details
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">When</h3>
                    <p className="text-[#0a0a0a]/60">
                      Saturday, January 31st, 2025
                      <br />
                      10:00 AM — 12:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Where</h3>
                    <p className="text-[#0a0a0a]/60">
                      BLE Studios
                      <br />
                      3222 FM 528
                      <br />
                      Friendswood, TX 77546
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=3222+FM+528+Friendswood+TX+77546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2563eb] hover:underline font-medium"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-[#f8f8f8] rounded-3xl p-10">
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  "Meet Director Lyndon Wang",
                  "Learn about violin, viola, and cello",
                  "Get instrument rental information",
                  "Tour our studio facilities",
                  "Ask questions about the program",
                  "Register on the spot if interested",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-[#0a0a0a]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-[#f8f8f8]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#2563eb] text-sm uppercase tracking-widest mb-4 font-medium">
              Reserve Your Spot
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Register Now
            </h2>
            <p className="text-[#0a0a0a]/60 text-lg">
              Free admission. Limited spots available.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-[#0a0a0a]/5">
            <RegistrationForm
              theme="light"
              accentColor="#2563eb"
              buttonBgColor="#0a0a0a"
              buttonTextColor="#ffffff"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <span className="text-[#0a0a0a] font-bold text-lg">B</span>
              </div>
              <div>
                <p className="font-bold text-lg">BASE</p>
                <p className="text-xs text-white/50">Bay Area String Ensembles</p>
              </div>
            </div>

            <p className="text-white/40 text-sm">
              BLE Studios • 3222 FM 528, Friendswood, TX 77546
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

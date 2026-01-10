"use client";

import Link from "next/link";

const landingPages = [
  {
    id: 1,
    slug: "midnight-crescendo",
    title: "Midnight Crescendo",
    description:
      "Deep navy blues with gold accents. Bold typography with strong visual hierarchy. Premium, sophisticated feel.",
    colors: ["#0f172a", "#1e3a5f", "#d4a574"],
    preview: "Deep blue gradient hero with gold CTA buttons",
  },
  {
    id: 2,
    slug: "warm-resonance",
    title: "Warm Resonance",
    description:
      "Rich burgundy and warm amber tones. Inviting and approachable while maintaining elegance. Emphasizes community.",
    colors: ["#7c2d36", "#f59e0b", "#faf7f2"],
    preview: "Warm burgundy sections with amber highlights",
  },
  {
    id: 3,
    slug: "modern-harmony",
    title: "Modern Harmony",
    description:
      "Clean black and white base with strategic color accents. Maximum contrast, ultra-modern. Professional and crisp.",
    colors: ["#0a0a0a", "#ffffff", "#2563eb"],
    preview: "High contrast monochrome with blue accents",
  },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            {/* Logo placeholder */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a574] to-[#7c2d36] flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Landing Page Options
              </h1>
              <p className="text-white/60 text-sm">
                Bay Area String Ensembles
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Open House Event</h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Review and compare different landing page designs for the January
            31st Open House event. Click any option to view the full page
            preview.
          </p>
        </div>

        {/* Landing Page Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {landingPages.map((page) => (
            <Link
              key={page.id}
              href={`/${page.slug}`}
              className="group block"
            >
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1">
                {/* Color Preview Bar */}
                <div className="h-32 relative overflow-hidden">
                  <div
                    className="absolute inset-0 flex"
                    style={{
                      background: `linear-gradient(135deg, ${page.colors[0]} 0%, ${page.colors[1]} 50%, ${page.colors[2]} 100%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded">
                      {page.preview}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-[#d4a574] transition-colors">
                      {page.title}
                    </h3>
                    <span className="text-white/40 text-sm">
                      Option {page.id}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {page.description}
                  </p>

                  {/* Color Swatches */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/40 mr-2">Colors:</span>
                    {page.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="px-5 pb-4">
                  <div className="flex items-center text-sm text-white/40 group-hover:text-[#d4a574] transition-colors">
                    <span>View full page</span>
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-medium mb-1">Event Details</h4>
              <p className="text-white/60 text-sm">
                Saturday, January 31st, 2025 | 10am - 12pm
              </p>
              <p className="text-white/60 text-sm">
                BLE Studios, 3222 FM 528, Friendswood, TX 77546
              </p>
            </div>
            <div className="text-white/40 text-sm">
              <p>Director: Lyndon Wang</p>
              <p>Instruments: Violin, Viola, Cello</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

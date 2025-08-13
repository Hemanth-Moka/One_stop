import React, { useMemo, useState } from "react";

export default function Haircut() {
  const haircuts = useMemo(
    () => [
      {
        id: 1,
        name: "Classic Fade",
        img: new URL("/src/haircuts/Haircut1.jpg", import.meta.url).href,
        price: 299,
        duration: "30–35 mins",
        category: "Men",
        tags: ["Low Maintenance", "Everyday"],
        blurb:
          "Clean taper on the sides and back with a natural top. Timeless and versatile for any occasion.",
      },
      {
        id: 2,
        name: "Textured Crop",
        img: new URL("/src/haircuts/Haircut2.jpg", import.meta.url).href,
        price: 349,
        duration: "30–40 mins",
        category: "Men",
        tags: ["Trendy", "Textured"],
        blurb:
          "Choppy layers up top with soft edges for a modern, effortless look and easy styling.",
      },
      {
        id: 3,
        name: "Layered Bob",
        img: new URL("/src/haircuts/Haircut3.jpg", import.meta.url).href,
        price: 449,
        duration: "40–50 mins",
        category: "Women",
        tags: ["Volume", "Lightweight"],
        blurb:
          "Face-framing layers that add movement and bounce while keeping the silhouette neat.",
      },
      {
        id: 4,
        name: "Long Layers & Shape",
        img: new URL("/src/haircuts/Haircut4.jpg", import.meta.url).href,
        price: 499,
        duration: "45–60 mins",
        category: "Women",
        tags: ["Shine", "Flowy"],
        blurb:
          "Subtle graduation that enhances natural texture and reduces weight for smooth flow.",
      },
      {
        id: 5,
        name: "Kids’ Smart Cut",
        img: new URL("/src/haircuts/Haircut5.jpg", import.meta.url).href,
        price: 199,
        duration: "20–25 mins",
        category: "Kids",
        tags: ["Comfy", "Quick"],
        blurb:
          "Gentle, tidy, and cute—perfect for school and play. We keep it comfy and fast.",
      },
      {
        id: 6,
        name: "Undercut + Design",
        img: new URL("/src/haircuts/Haircut6.jpg", import.meta.url).href,
        price: 549,
        duration: "45–55 mins",
        category: "Men",
        tags: ["Bold", "Custom"],
        blurb:
          "Sharp undercut with optional hair design. High contrast and head-turning finish.",
      },
    ],
    []
  );

  const [activeCat, setActiveCat] = useState("All");
  const [preview, setPreview] = useState(null);
  const categories = ["All", "Men", "Women", "Kids"];

  const filtered = useMemo(() => {
    if (activeCat === "All") return haircuts;
    return haircuts.filter((h) => h.category === activeCat);
  }, [activeCat, haircuts]);

  const currency = (n) => `₹${n}/-`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-red-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-red-700 blur-3xl opacity-30" />
          <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-red-500 blur-3xl opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-900/40 px-3 py-1 text-xs tracking-wider uppercase">
              ✂️ premium styling
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-red-400">
              Haircut Studio
            </h1>
            <p className="mt-4 max-w-2xl text-red-200">
              Six signature styles crafted for comfort, confidence, and your
              vibe. Choose your look—our experts do the rest.
            </p>

            {/* Filters */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const active = activeCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={[
                      "rounded-2xl px-4 py-2 text-sm transition",
                      active
                        ? "bg-red-500 text-black shadow-lg shadow-red-500/40"
                        : "bg-red-900/40 hover:bg-red-800/40 text-red-200 border border-red-500/20",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((h) => (
            <article
              key={h.id}
              className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-950/80 to-black/80 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:shadow-red-600/30"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={h.img}
                  alt={h.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                <div className="pointer-events-none absolute left-3 top-3 flex gap-2">
                  {h.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-red-900/80 px-2 py-1 text-xs text-red-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-red-300">
                    {h.name}
                  </h3>
                  <span className="rounded-xl bg-red-500 text-black px-3 py-1 text-sm font-bold">
                    {currency(h.price)}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-red-200/80">
                  {h.blurb}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-red-400">
                  <span>⏱ {h.duration}</span>
                  <span>👤 {h.category}</span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={() => setPreview(h)}
                    className="flex-1 rounded-xl bg-red-500 px-4 py-2 text-center font-medium text-black transition hover:bg-red-400"
                  >
                    Preview
                  </button>
                  <button
                    className="flex-1 rounded-xl border border-red-500/40 bg-red-900/40 px-4 py-2 text-center font-medium text-red-200 transition hover:bg-red-800/40"
                    onClick={() => alert(`Booked: ${h.name}`)}
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* bottom accent bar */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-600 opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>

      {/* Modal Preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-red-500/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[340px] w-full">
              <img
                src={preview.img}
                alt={preview.name}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => setPreview(null)}
                className="absolute right-3 top-3 rounded-full bg-red-900/80 px-3 py-1 text-sm text-red-100 transition hover:bg-red-800"
              >
                ✕ Close
              </button>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-semibold text-red-300">
                  {preview.name}
                </h3>
                <p className="mt-1 text-sm text-red-200">{preview.blurb}</p>
              </div>
            </div>

            <div className="grid gap-4 p-4 sm:grid-cols-3">
              <div className="rounded-xl border border-red-500/20 bg-red-900/30 p-3">
                <div className="text-sm text-red-400">Price</div>
                <div className="text-lg font-semibold text-red-200">
                  {currency(preview.price)}
                </div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-900/30 p-3">
                <div className="text-sm text-red-400">Duration</div>
                <div className="text-lg font-semibold text-red-200">
                  {preview.duration}
                </div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-900/30 p-3">
                <div className="text-sm text-red-400">Category</div>
                <div className="text-lg font-semibold text-red-200">
                  {preview.category}
                </div>
              </div>

              <div className="sm:col-span-3">
                <button
                  onClick={() => {
                    setPreview(null);
                    alert(`Booked: ${preview.name}`);
                  }}
                  className="w-full rounded-xl bg-red-500 px-4 py-3 font-semibold text-black transition hover:bg-red-400"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="pb-10 text-center text-xs text-red-400/70">
        Prices inclusive of basic styling • Add-ons available at counter
      </footer>
    </div>
  );
}

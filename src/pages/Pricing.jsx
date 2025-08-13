import React, { useState } from "react";

export default function Pricing() {
  const categories = [
    // ---------- WOMEN ----------
    {
      title: "Facial Hair Removal",
      items: [
        { service: "Upper lips", amount: 20 },
        { service: "Lower lips", amount: 20 },
        { service: "Chin", amount: 30 },
        { service: "Eyebrows", amount: 40 },
        { service: "Forehead", amount: 30 },
        { service: "Side locks", amount: 60 },
        { service: "Full face", amount: 250 },
      ],
    },
    {
      title: "Face Waxing",
      items: [
        { service: "Upper lips", amount: 40 },
        { service: "Lower lips", amount: 40 },
        { service: "Chin", amount: 60 },
        { service: "Eyebrows", amount: 80 },
        { service: "Forehead", amount: 40 },
        { service: "Side locks", amount: 120 },
        { service: "Full face", amount: 300 },
      ],
    },
    {
      title: "Honey Wax",
      items: [
        { service: "Under arms waxing", amount: 100 },
        { service: "Full Hands", amount: 200 },
        { service: "Full Legs", amount: 300 },
        { service: "Half hand", amount: 250 },
        { service: "Half legs", amount: 200 },
        { service: "Full front waxing", amount: 400 },
        { service: "Full back waxing", amount: 400 },
        { service: "Half front", amount: 250 },
        { service: "Half back", amount: 250 },
        { service: "Bikini", amount: 1000 },
      ],
    },
    {
      title: "Chocolate Waxing",
      items: [
        { service: "Under arms waxing", amount: 150 },
        { service: "Full Hands", amount: 250 },
        { service: "Full Legs", amount: 350 },
        { service: "Half hand", amount: 200 },
        { service: "Half legs", amount: 250 },
        { service: "Full front waxing", amount: 500 },
        { service: "Full back waxing", amount: 500 },
        { service: "Half front", amount: 350 },
        { service: "Half back", amount: 350 },
        { service: "Bikini", amount: 1200 },
      ],
    },
    {
      title: "Rice Waxing",
      items: [
        { service: "Under arms waxing", amount: 200 },
        { service: "Full Hands", amount: 300 },
        { service: "Full Legs", amount: 380 },
        { service: "Half hand", amount: 250 },
        { service: "Half legs", amount: 300 },
        { service: "Full front waxing", amount: 700 },
        { service: "Full back waxing", amount: 700 },
        { service: "Half front", amount: 450 },
        { service: "Half back", amount: 450 },
        { service: "Bikini", amount: 2500 },
      ],
    },
    {
      title: "Facials",
      items: [
        { service: "Clean up (30 min)", amount: 500 },
        { service: "Fruit facial (45 min)", amount: 600 },
        { service: "Oxy facial (45 min)", amount: 700 },
        { service: "Pearl facial (45 min)", amount: 800 },
        { service: "Gold facial (45 min)", amount: 800 },
        { service: "Instant glow facial (45 min)", amount: 900 },
        { service: "Anti tan facial (45 min)", amount: 900 },
        { service: "Diamond facial (45 min)", amount: 1000 },
        { service: "Red wine facial (45 min)", amount: 1200 },
        { service: "O3 whitening facial (45 min)", amount: 1500 },
        { service: "O3 vitamin C facial (45 min)", amount: 1800 },
        { service: "Platinum facial (45 min)", amount: 2000 },
        { service: "Hydra facial (45 min)", amount: 2300 },
      ],
    },
    {
      title: "D-Tan",
      items: [
        { service: "Face D-tan (30 min)", amount: 350 },
        { service: "Neck D-tan (30 min)", amount: 250 },
        { service: "Under arms D-tan (20 min)", amount: 250 },
        { service: "Back D-tan (30 min)", amount: 350 },
        { service: "Full hand D-tan (30 min)", amount: 700 },
        { service: "Full legs D-tan (30 min)", amount: 900 },
        { service: "Half leg D-tan (30 min)", amount: 600 },
        { service: "Foot D-tan (30 min)", amount: 300 },
        { service: "Face bleach (30 min)", amount: 250 },
      ],
    },
    {
      title: "Manicure",
      items: [
        { service: "Classic Manicure (45 min)", amount: 400 },
        { service: "Spa Manicure (45 min)", amount: 500 },
        { service: "Crystal Manicure (45 min)", amount: 600 },
      ],
    },
    {
      title: "Pedicure",
      items: [
        { service: "Classic Pedicure (45 min)", amount: 500 },
        { service: "Spa Pedicure (45 min)", amount: 600 },
        { service: "Crystal Pedicure (45 min)", amount: 700 },
      ],
    },
    {
      title: "Polishing",
      items: [
        { service: "Hand polishing (45 min)", amount: 850 },
        { service: "Legs polishing (45 min)", amount: 1000 },
        { service: "Full body polishing (1.5 hr)", amount: 2500 },
      ],
    },
    {
      title: "Massage (Women)",
      items: [
        { service: "Head massage (30 min)", amount: 300 },
        { service: "Foot massage (30 min)", amount: 250 },
        { service: "Hand massage (20 min)", amount: 350 },
        { service: "Back massage (30 min)", amount: 500 },
        { service: "Full body massage (45 min)", amount: 1300 },
      ],
    },
    {
      title: "Haircuts (Women)",
      items: [
        { service: "Straight Haircut", amount: 250 },
        { service: "Advance haircut + Hair wash + Blowdry", amount: 1500 },
      ],
    },
    {
      title: "Hair Care",
      items: [
        { service: "Hair spa", amount: 700 },
        { service: "Keratin hair spa", amount: 1200 },
        { service: "Root touch up (Regular)", amount: 900 },
        { service: "Root touch up (Ammonia free)", amount: 1200 },
        { service: "Global hair colour (Regular)", amount: 3000 },
        { service: "Global hair colour (Ammonia free)", amount: 4000 },
        { service: "Global highlight", amount: 3000 },
        { service: "Global highlight (Ammonia free)", amount: 4500 },
        { service: "Streaks per 1", amount: 350 },
        { service: "Blowdry setting", amount: 500 },
        { service: "Ironing", amount: 700 },
        { service: "Tongs (curl)", amount: 800 },
      ],
    },
    {
      title: "Hair Treatments",
      items: [
        { service: "Keratin treatment (S/M/L)", amount: 3500 },
        { service: "Smoothing treatment (S/M/L)", amount: 4000 },
        { service: "Botox treatment (S/M/L)", amount: 5000 },
        { service: "Kera-Smooth (S/M/L)", amount: 4500 },
        { service: "Dandruff treatment", amount: 1500 },
      ],
    },
    {
      title: "Makeup (Women)",
      items: [
        { service: "Normal Makeup", amount: 1000 },
        { service: "Party Makeup", amount: 2500 },
        { service: "Bridal Makeup", amount: 4000 },
      ],
    },
    {
      title: "Bridal Package",
      items: [
        { service: "Full Pre-Bridal Package", amount: 10000 },
      ],
    },

    // ---------- MEN ----------
    {
      title: "Basic Services (Men)",
      items: [
        { service: "Hair cut", amount: 200 },
        { service: "Beard", amount: 100 },
        { service: "Shave", amount: 100 },
        { service: "Hair Wash", amount: 150 },
        { service: "Under arms - Trim/Wax", amount: 100 },
      ],
    },
    {
      title: "Massage (Men)",
      items: [
        { service: "Head massage (30 min)", amount: 300 },
        { service: "Face massage (20 min)", amount: 250 },
        { service: "Hand massage (30 min)", amount: 300 },
        { service: "Foot massage (30 min)", amount: 400 },
        { service: "Back massage (30 min)", amount: 500 },
        { service: "Full body massage (45 min)", amount: 1500 },
      ],
    },
    {
      title: "Hair Treatment (Men)",
      items: [
        { service: "Hair spa", amount: 500 },
        { service: "Keratin hair spa", amount: 800 },
        { service: "Streaks (1)", amount: 150 },
        { service: "Highlight", amount: 1000 },
        { service: "Global hair colour (Ammonia free)", amount: 1200 },
        { service: "Global highlight", amount: 1500 },
        { service: "Keratin treatment", amount: 2000 },
        { service: "Smoothing treatment", amount: 2500 },
        { service: "Botox treatment", amount: 3000 },
        { service: "Kera-smooth", amount: 4000 },
        { service: "Dandruff treatment", amount: 1000 },
      ],
    },
    {
      title: "Makeup (Men)",
      items: [
        { service: "Normal Makeup", amount: 500 },
        { service: "Party Makeup", amount: 800 },
        { service: "Groom Makeup", amount: 2000 },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const filteredCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((cat) => cat.title === selectedCategory);

  const sortItems = (items) => {
    if (sortOption === "name-asc") {
      return [...items].sort((a, b) => a.service.localeCompare(b.service));
    }
    if (sortOption === "price-asc") {
      return [...items].sort((a, b) => a.amount - b.amount);
    }
    if (sortOption === "price-desc") {
      return [...items].sort((a, b) => b.amount - a.amount);
    }
    return items;
  };

  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sticky top-0 bg-black py-4 z-10 border-b border-red-600">
        <select
          className="px-4 py-2 bg-black border border-white rounded text-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat.title}>
              {cat.title}
            </option>
          ))}
        </select>

        <select
          className="px-4 py-2 bg-black border border-white rounded text-white"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort: Default</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        {filteredCategories.map((cat, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold mb-3 border-b border-white pb-1 text-red-500">
              {cat.title}
            </h2>
            <table className="w-full border-collapse border border-white text-left text-sm">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-white px-3 py-2">Service</th>
                  <th className="border border-white px-3 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {sortItems(cat.items).map((item, i) => (
                  <tr
                    key={i}
                    className={`transition hover:bg-900/30 ${
                      i % 2 === 0 ? "bg-black" : "bg-zinc-900"
                    }`}
                  >
                    <td className="border border-white px-3 py-2">{item.service}</td>
                    <td className="border border-white px-3 py-2">₹{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}

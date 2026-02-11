"use client";
import React from "react";
import Link from "next/link";
import "./_desktopcontent.css";
import { useState, useEffect } from "react";

const DesktopContent = () => {
  const [categoryDetailsList, setCategoryDetailsList] = useState([]);

  useEffect(() => {
    // We'll use a static list or fetch from a client-side friendly way if needed,
    // but for now, since it's a small set, we can hardcode or use a public json.
    // Given the constraints, I'll derive it once or use the baseline categories.
    const categories = [
      { name: "Market News", slug: "market-news" },
      { name: "Renting", slug: "renting" },
      { name: "Buying & Selling", slug: "buying-and-selling" },
      { name: "Guides & Advice", slug: "guides-and-advice" },
      { name: "Investment", slug: "investment" },
      { name: "Regions", slug: "regions" },
      { name: "Lifestyle", slug: "lifestyle" }
    ];
    setCategoryDetailsList(categories);
  }, []);

  return (
    <section className="desktop-content-div">
      <div className="desktop-category-content-div flex items-center gap-x-6">
        {categoryDetailsList.map((category) => (
          <Link
            key={category.slug}
            className="text-[11px] font-medium tracking-wider uppercase text-gray-300 hover:text-[#c5a059] transition-colors whitespace-nowrap"
            href={`/category/${category.slug}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DesktopContent;

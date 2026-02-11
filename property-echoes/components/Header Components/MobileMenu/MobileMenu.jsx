"use client";
import React from "react";
import Link from "next/link";
import "./_mobilemenu.css";
import { useState, useEffect } from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [closeMenu, setCloseMenu] = useState("mobile-view-menu-div");
  const [categoryDetailsList, setCategoryDetailsList] = useState([]);

  useEffect(() => {
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

  const handleClick = () => {
    setCloseMenu("mobile-view-close-menu-div");
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={closeMenu}>
        <div className="flex flex-col items-center justify-center space-y-4">
          {categoryDetailsList.map((category) => (
            <Link
              key={category.slug}
              className="mobile-category-title-element-div text-white hover:text-[#c5a059] hover:underline decoration-1 underline-offset-8 transition-all duration-300 font-bold"
              href={`/category/${category.slug}`}
              onClick={handleClick}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

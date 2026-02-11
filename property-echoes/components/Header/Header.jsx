"use client";

import React, { useState } from "react";
import BlogTitle from "../Header Components/BlogTitle/BlogTitle";
import DesktopContent from "../Header Components/DesktopContent/DesktopContent";
import MobileContent from "../Header Components/MobileContent/MobileContent";
import MobileMenu from "../Header Components/MobileMenu/MobileMenu";
import SearchBar from "../SearchBar/SearchBar";
import "./_header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <header className="bg-[#002147] border-b border-white/10 sticky top-0 z-50 w-full">
      <div className="container-custom max-w-7xl mx-auto py-8 flex items-center justify-between gap-10">
        <div className="flex-shrink-0">
          <BlogTitle />
        </div>
        <div className="hidden lg:flex items-center flex-1 justify-end gap-10 min-w-0">
          <DesktopContent />
          <div className="w-48 flex-shrink-0">
            <SearchBar />
          </div>
        </div>
        <MobileContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {!menuOpen && (
        <div className="lg:hidden border-t border-white/10">
          <div className="p-6">
             <SearchBar />
          </div>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;

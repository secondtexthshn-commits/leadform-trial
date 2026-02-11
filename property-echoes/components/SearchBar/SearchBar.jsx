"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./_searchbar.css";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Suspense } from "react";

const SearchBarComponent = () => {
  const [inputSearchText, setInputSearchText] = useState("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleInputChange = (e) => {
    setInputSearchText(e.target.value);
  };
  const handleSearchClick = (event) => {
    event.preventDefault();
    console.log("Search Text:", inputSearchText); // Perform search action here
    const params = new URLSearchParams();
    inputSearchText
      ? params.set("query", inputSearchText)
      : params.delete("query");
    replace(`/?${params.toString()}`);
    setInputSearchText("");
  };
  return (
    <form className="flex items-center w-full max-w-[160px] md:max-w-[200px]" onSubmit={handleSearchClick}>
      <div className="relative flex items-center w-full group">
        <input
          type="search"
          placeholder="Search Articles"
          className="bg-transparent border-b border-white/20 focus:border-[#c5a059] text-white text-[13px] py-1.5 pl-0 pr-8 w-full outline-none transition-all placeholder:text-gray-500 font-medium"
          value={inputSearchText}
          onChange={handleInputChange}
        />
        <button className="absolute right-0 text-gray-500 group-hover:text-white transition-colors">
          <FontAwesomeIcon icon={faSearch} className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
};

const SearchBar = () => {
  return (
    <Suspense>
      <SearchBarComponent />
    </Suspense>
  );
};

export default SearchBar;

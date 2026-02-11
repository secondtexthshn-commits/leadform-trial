"use client";

import React from "react";
import PostCard from "../PostCard/PostCard";
import Link from "next/link";
import "./_searchresults.css";

const SearchResults = ({ 
  visiblePosts, 
  categoryName, 
  authorName, 
  page, 
  totalPages,
  baseUrl 
}) => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto">
        {visiblePosts && visiblePosts.length > 0 ? (
          <>
            <div className="mb-12 border-b border-gray-200 pb-10">
              <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Category Archive</span>
              <h2 className="text-[#002147] text-4xl font-bold serif">
                {categoryName}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {visiblePosts.map((post, index) => (
                <PostCard post={post.node} key={index} />
              ))}
            </div>

            <div className="flex gap-2 mt-20 justify-center items-center pt-10 border-t border-gray-100">
              <Link
                href={`${baseUrl}${baseUrl.includes('?') ? '&' : '?'}page=${page - 1}`}
                className={`w-10 h-10 flex items-center justify-center transition-all border ${
                  page === 1
                    ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none"
                    : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"
                } text-[10px] font-bold`}
                aria-disabled={page === 1}
              >
                &lt;
              </Link>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <Link
                  key={num}
                  href={`${baseUrl}${baseUrl.includes('?') ? '&' : '?'}page=${num}`}
                  className={`w-10 h-10 flex items-center justify-center transition-all border ${
                    page === num
                      ? "bg-[#002147] text-white border-[#002147]"
                      : "border-gray-200 text-[#002147] hover:border-[#002147]"
                  } text-[10px] font-bold`}
                >
                  {num}
                </Link>
              ))}
              <Link
                href={`${baseUrl}${baseUrl.includes('?') ? '&' : '?'}page=${page + 1}`}
                className={`w-10 h-10 flex items-center justify-center transition-all border ${
                  page === totalPages
                    ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none"
                    : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"
                } text-[10px] font-bold`}
                aria-disabled={page === totalPages}
              >
                &gt;
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-[#002147] text-2xl font-bold serif mb-4">No results found</h2>
            <p className="text-gray-500">We couldn't find any articles matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

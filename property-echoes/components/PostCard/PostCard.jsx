"use client";
import React from "react";
import "./_postcard.css";
import Link from "next/link";

// Function to truncate text at the first full stop
const truncateText = (text) => {
  if (!text) return "";
  const firstFullStopIndex = text.indexOf(".");
  return firstFullStopIndex !== -1
    ? text.slice(0, firstFullStopIndex + 1) // Include the full stop
    : text; // If no full stop, return the full text
};

const PostCard = ({ post }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Ensure post.category exists and has at least one item
  const categorySlug = post.category?.[0]?.slug || "uncategorized";
  const truncatedExcerpt = truncateText(post.excerpt);

  const formattedDate = isClient 
    ? new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : '';

  return (
    <section className="group bg-transparent overflow-hidden transition-all duration-500 flex flex-col h-full" key={post.slug}>
      {/* Image Container */}
      {post.featuredImage?.url && (
        <Link href={`/category/${categorySlug}/${post.slug}`} className="block overflow-hidden aspect-[16/9] mb-6 border border-gray-100">
          <img
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            src={post.featuredImage.url}
            alt={post.featuredImage.title || "Post Image"}
          />
        </Link>
      )}

      {/* Content Container */}
      <div className="flex flex-col flex-grow text-[#333]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c5a059] bg-[#c5a059]/10 px-2 py-1">
            {categorySlug.replace("-", " ")}
          </span>
          {isClient && (
            <span className="text-gray-400 text-[9px] uppercase tracking-[0.2em] font-semibold">
               {formattedDate}
            </span>
          )}
        </div>

        <Link href={`/category/${categorySlug}/${post.slug}`}>
          <h3 className="text-2xl font-bold text-[#002147] mb-4 group-hover:text-[#c5a059] transition-colors line-clamp-2 leading-[1.2] px-0 mt-0 serif">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-[15px] mb-8 line-clamp-3 leading-[1.7] flex-grow px-0 mt-0 font-medium">
          {truncatedExcerpt}
        </p>

        <div className="mt-auto">
          <Link href={`/category/${categorySlug}/${post.slug}`} className="inline-flex items-center text-[10px] font-bold text-[#002147] group/link tracking-[0.3em] uppercase transition-all hover:text-[#c5a059]">
            <span>CONTINUE READING</span>
            <div className="w-8 h-[1px] bg-[#002147] ml-3 transition-all group-hover/link:w-12 group-hover/link:bg-[#c5a059]"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostCard;

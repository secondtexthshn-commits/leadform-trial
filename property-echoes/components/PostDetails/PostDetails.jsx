"use client";

import React, { useEffect } from "react";
import "./_postdetails.css";
import AuthorAndDate from "../PostCard/AuthorAndDate/AuthorAndDate";
import sanitize from "sanitize-html";
import Link from "next/link";
import parse from "html-react-parser";

const PostDetails = ({ details, relatedPosts }) => {
  useEffect(() => {
    // If there's a script tag in the content, we need to execute it manually
    // because dangerouslySetInnerHTML doesn't execute scripts.
    const container = document.querySelector(".prose");
    if (container) {
      const scripts = container.querySelectorAll("script");
      scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach((attr) =>
          newScript.setAttribute(attr.name, attr.value)
        );
        newScript.innerHTML = oldScript.innerHTML;
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    }
    // Also re-run calculation if the tool exists
    if (window.calculateEstateAgentFees) {
      window.calculateEstateAgentFees();
    }
    
    // Inject the external script if not already present
    if (!document.querySelector('script[src="/script.js"]')) {
      const script = document.createElement('script');
      script.src = '/script.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-trigger the init function if script already loaded
      if (typeof window.initLoftCalculator === 'function') {
        window.initLoftCalculator();
      }
    }
  }, [details]);

  const cleanHTML = sanitize(details.content.html, {
    allowedTags: sanitize.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "div",
      "span",
      "label",
      "input",
      "script",
      "iframe",
    ]),
    allowedAttributes: {
      ...sanitize.defaults.allowedAttributes,
      "*": ["class", "id", "style"],
      input: ["type", "id", "value", "step", "checked", "placeholder"],
      label: ["for"],
      script: ["type"],
      iframe: ["src", "class", "title", "style", "width", "height", "frameborder"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
  });

  const isLoftCalculator = details.slug === "loft-conversion-cost-calculator";

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
        <Link href="/" className="hover:text-[#c5a059] transition-colors">Home</Link>
        <span>&gt;</span>
        <Link href={`/category/${details.category[0].slug}`} className="hover:text-[#c5a059] transition-colors">
          {details.category[0].name}
        </Link>
        <span>&gt;</span>
        <span className="text-gray-400 truncate">{details.title}</span>
      </div>

      <div className="text-center mb-12">
        <Link href={`/category/${details.category[0].slug}`}>
          <p className="text-[#c5a059] text-xs font-bold tracking-[0.2em] uppercase mb-4 hover:underline cursor-pointer inline-block">
            {details.category[0].name}
          </p>
        </Link>
        <h1 className="text-[#002147] text-4xl md:text-5xl font-bold mb-8 leading-tight serif">
          {details.title}
        </h1>
        <div className="flex justify-center mb-10">
          <AuthorAndDate post={details} />
        </div>
        {details.slug === "estate-agent-fees-calculator" && (
          <div className="not-prose mb-12">
            <iframe
              src="/estate-agent-fees-calculator.html"
              className="w-full border-0 min-h-[650px] md:min-h-[700px]"
              title="Estate Agent Fees Calculator"
              style={{ overflow: "hidden" }}
              scrolling="no"
            ></iframe>
          </div>
        )}
        {!isLoftCalculator && details.slug !== "estate-agent-fees-calculator" && (
          <img
            src={details.featuredImage.url}
            alt={details.title}
            className="w-full aspect-video object-cover rounded-lg shadow-xl mb-12"
          />
        )}
      </div>

      <div className={`prose prose-lg prose-slate max-w-none text-gray-800 leading-relaxed font-serif ${isLoftCalculator ? 'loft-calc-page' : ''}`}>
        {parse(cleanHTML)}
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-24 pt-16 border-t border-gray-100">
          <h2 className="text-[#002147] text-2xl font-bold mb-10 serif text-center">
            Related Intelligence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Link
                href={`/category/${post.node.category[0].slug}/${post.node.slug}`}
                key={index}
                className="group"
              >
                <div className="mb-4 overflow-hidden rounded-lg aspect-video">
                  <img
                    src={post.node.featuredImage.url}
                    alt={post.node.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[#002147] font-bold leading-snug group-hover:text-[#c5a059] transition-colors line-clamp-2">
                  {post.node.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PostDetails;

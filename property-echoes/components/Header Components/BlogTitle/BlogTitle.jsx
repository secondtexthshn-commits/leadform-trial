import React from "react";
import "./_blogtitle.css";
import Link from "next/link";
import Logo from "../../../public/estate echoes logo.png";
import Image from "next/image";

const BlogTitle = () => {
  return (
    <section className="flex items-center">
      <Link href={"/"} className="group transition-opacity hover:opacity-90">
        <span className="text-white text-xl md:text-2xl font-bold tracking-tight serif whitespace-nowrap">
          Property Echoes
        </span>
      </Link>
    </section>
  );
};

export default BlogTitle;

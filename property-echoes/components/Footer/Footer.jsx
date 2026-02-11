import React from "react";
import BlogTitle from "../Header Components/BlogTitle/BlogTitle";
import "./_footer.css";
import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#002147] text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <BlogTitle />
            <p className="text-gray-400 text-sm mt-6 leading-relaxed px-0">
              Your trusted source for UK real estate insights, market trends, and property advice. Expertly curated for homeowners, buyers, and investors.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-[#c5a059]">Quick Links</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-gray-300 hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/write-for-us" className="text-sm text-gray-300 hover:text-white transition-colors">Write for Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-[#c5a059]">Legal</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              <li><Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-sm text-gray-300 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-[#c5a059]">Contact</h4>
            <p className="text-sm text-gray-300 px-0">Email: propertyechoes@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest px-0">© {currentYear} Property Echoes. All rights reserved.</p>
          <p className="text-[10px] text-gray-600 mt-4 md:mt-0 max-w-md px-0">
            Disclaimer: Information is for general guidance only and does not constitute financial or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

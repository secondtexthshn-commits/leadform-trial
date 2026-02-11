// src/app/disclaimer/page.jsx
import React from "react";

// Define metadata for the Disclaimer page
export const metadata = {
  title: "Disclaimer",
  description:
    "Read our disclaimer to understand the limitations of the information provided on Property Echoes. We are not responsible for property transactions or decisions made based on our content.",
  alternates: {
    canonical: "https://propertyechoes.com/disclaimer",
  },
};


export default function DisclaimerPage() {
  return (
    <div className="container bg-transparent text-black mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center p-5">Disclaimer</h1>
      <p className="text-lg">
        The real estate information on our site is accurate to the best of our
        knowledge but is for general information only. We are not responsible
        for any property transactions or decisions made based on this
        information.
      </p>
      <p className="text-lg">
        We are not affiliated with any estate agents, letting agents, or other
        parties mentioned on our site unless stated otherwise. We may allow
        approved agents to advertise or list properties on our site, but we do
        not guarantee their content or services.
      </p>
      <p className="text-lg">
        Always do your own research and seek professional advice before making
        property-related decisions. By using this site, you agree that we are
        not liable for any losses or damages resulting from your use of the
        information provided.
      </p>
    </div>
  );
}

// src/app/cookie-policy/page.jsx
import React from "react";

// Define metadata for the Cookie Policy page
export const metadata = {
  title: "Cookie Policy",
  description:
    "Read our Cookie Policy to understand how we use cookies on our UK real estate blog. Learn what types of cookies we use, why we use them, and how to manage your preferences.",
  alternates: {
    canonical: "/cookie-policy",
  },
};


const CookiePolicy = () => {
  const siteName = "Property Echoes"; // Replace with your site name
  const siteURL = "https://propertyechoes.com/"; // Replace with your site URL
  const contactEmail = "propertyechoes@gmail.com"; // Replace with your contact email

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center p-5">Cookie Policy</h1>
      <p className="text-gray-700">Last Updated: January 31, 2026</p>

      <p className="mt-4">
        This Cookie Policy explains how <strong>{siteName}</strong> ("we", "us",
        or "our") uses cookies and similar technologies when you visit our
        website,{" "}
        <a href={siteURL} className="text-blue-500 underline">
          {siteURL}
        </a>{" "}
        (the "Site"). Our implementation uses Google Consent Mode v2, meaning no tracking cookies are set unless you explicitly grant permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8">1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help us remember your preferences, improve site
        performance, and offer a more personalised experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        2. How We Categorize Cookies
      </h2>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>
          <strong>Essential Cookies:</strong> Required for the website
          to function properly. These do not require consent.
        </li>
        <li>
          <strong>Analytics Cookies (e.g., Google Analytics):</strong> Help us understand how visitors
          interact with the site. These are only active if you select "Accept All" or enable them in "Customize".
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements. These are blocked by default.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">3. Google Consent Mode v2</h2>
      <p>
        We respect your privacy by default. Upon your first visit, all non-essential tracking is disabled. Only after your explicit consent do we update the Google Tag Manager settings to allow analytics or marketing data collection.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        4. How to Manage or Withdraw Consent
      </h2>
      <p>
        You can manage your preferences at any time:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Cookie Banner:</strong> Use the "Customize" option in our banner to toggle specific categories.</li>
        <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies via their settings menus.</li>
      </ul>
      <ul className="list-disc list-inside ml-4">
        <li>View which cookies are stored</li>
        <li>Delete cookies individually or all at once</li>
        <li>Block third-party cookies</li>
        <li>Set preferences for certain websites</li>
      </ul>
      <p className="mt-4">
        For more details, visit{" "}
        <a
          href="https://www.allaboutcookies.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          allaboutcookies.org
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        5. Changes to This Cookie Policy
      </h2>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be
        reflected on this page with an updated "Last Updated" date. We encourage
        you to review this policy regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-8">6. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or this Cookie
        Policy, please contact us at:
      </p>
      <p className="mt-2">
        <strong>Email:</strong>{" "}
        <a href={`mailto:${contactEmail}`} className="text-blue-500 underline">
          {contactEmail}
        </a>
      </p>
    </div>
  );
};

export default CookiePolicy;

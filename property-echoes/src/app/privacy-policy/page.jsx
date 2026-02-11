// src/app/privacy-policy/page.jsx
import React from "react";

// Define metadata for the Privacy Policy page
export const metadata = {
  title: "Privacy Policy ",
  description:
    "Read our Privacy Policy to understand how we handle your information. We are committed to protecting your privacy and do not collect any personal data.",
  alternates: {
    canonical: "https://propertyechoes.com/privacy-policy",
  },
};


const PrivacyPolicy = () => {
  const siteName = "Property Echoes"; // Replace with your site name
  const siteURL = "https://propertyechoes.com/"; // Replace with your site URL
  const contactEmail = " propertyechoes@gmail.com"; // Replace with your contact email

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center p-5">
        Privacy Policy
      </h1>
      <p className="text-gray-700">Last Updated: January 31, 2026</p>

      <p className="mt-4">
        At <strong>{siteName}</strong>, we are committed to protecting your
        privacy. This Privacy Policy explains how we handle information when you
        visit our website,{" "}
        <a href={siteURL} className="text-blue-500 underline">
          {siteURL}
        </a>{" "}
        (the "Site"). We process data in accordance with the UK General Data Protection Regulation (UK GDPR), the EU General Data Protection Regulation (GDPR), and the Data Protection Act 2018.
      </p>

      <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
      <p>
        We collect certain information to improve your experience and analyze site traffic:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Usage Data:</strong> We use Google Analytics (GA4) to collect information about how you interact with our Site. This includes your IP address (anonymized), browser type, device information, pages visited, and time spent on the Site.</li>
        <li><strong>Communication Data:</strong> If you contact us via email, we collect your email address and any information you provide in your message.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">
        2. Legal Basis for Processing
      </h2>
      <p>
        Under GDPR and UK GDPR, we process your data based on:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Consent:</strong> For the use of non-essential cookies (analytics and marketing). You can withdraw this consent at any time via our cookie banner.</li>
        <li><strong>Legitimate Interests:</strong> To maintain site security, analyze performance, and improve our content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">
        3. How We Use Your Information
      </h2>
      <p>
        We use the collected information to:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Monitor and analyze website traffic and trends.</li>
        <li>Improve the content and functionality of our Site.</li>
        <li>Respond to your inquiries and support requests.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">
        4. Data Sharing and Retention
      </h2>
      <p>
        We share anonymized usage data with Google Analytics. We do not sell or rent your personal data to third parties. We retain usage data for as long as necessary for analytical purposes, typically up to 14 months for GA4 data.
      </p>

      <h2 className="text-2xl font-semibold mt-8">5. Your Rights</h2>
      <p>
        As a resident of the UK or EEA, you have the following rights:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Right to Access:</strong> Request a copy of your data.</li>
        <li><strong>Right to Rectification:</strong> Correct inaccurate data.</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your data.</li>
        <li><strong>Right to Object/Restrict:</strong> Object to or limit how we process your data.</li>
        <li><strong>Right to Data Portability:</strong> Receive your data in a structured format.</li>
      </ul>
      <p className="mt-2">To exercise these rights, please contact us at {contactEmail}.</p>

      <h2 className="text-2xl font-semibold mt-8">
        6. International Data Transfers
      </h2>
      <p>
        Since we do not collect any user data, there are no international data
        transfers.
      </p>

      <h2 className="text-2xl font-semibold mt-8">7. Third-Party Links</h2>
      <p>
        Our Site may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these sites.{" "}
        <strong>
          We encourage users to review their privacy policies before providing
          any personal information.
        </strong>
      </p>

      <h2 className="text-2xl font-semibold mt-8">8. Children’s Privacy</h2>
      <p>
        Our Site is not intended for individuals under the age of 16. Since we
        do not collect any personal information, we do not knowingly collect
        data from children.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        9. Changes to This Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated "Last Updated" date. We encourage
        you to review this policy periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-8">10. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
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

export default PrivacyPolicy;

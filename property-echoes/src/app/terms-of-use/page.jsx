// src/app/terms-of-use/page.jsx
import React from "react";

// Define metadata for the Terms of Use page
export const metadata = {
  title: "Terms of Use ",
  description:
    "Review the Terms of Use for Estate Echoes. By accessing or using our site, you agree to comply with these terms. Learn about your rights, responsibilities, and more.",
  alternates: {
    canonical: "https://propertyechoes.com/terms-of-use",
  },
};


const TermsOfUse = () => {
  const siteName = "Estate Echoes"; // Replace with your site name
  const contactEmail = "info@estateechoes.com"; // Replace with your contact email
  const physicalAddress = "123 Main Street, City, Country"; // Replace with your address

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center p-5">Terms of Use</h1>
      <p className="text-gray-700">Last Updated: [Mar 19, 2025]</p>

      <p className="mt-4">
        Welcome to <strong>{siteName}</strong> (the "Site"). By accessing or
        using this Site, you agree to comply with and be bound by these Terms of
        Use. If you do not agree to these terms, please do not use this Site.
      </p>

      <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
      <p>
        By using this Site, you agree to these Terms of Use and our{" "}
        <a href="/privacy-policy" className="text-blue-500 underline">
          Privacy Policy
        </a>
        . These terms apply to all visitors, users, and others who access or use
        the Site.
      </p>

      <h2 className="text-2xl font-semibold mt-8">2. Use of the Site</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>Eligibility:</strong> You must be at least 16 years old to use
          this Site.
        </li>
        <li>
          <strong>License:</strong> We grant you a limited, non-exclusive,
          non-transferable, revocable license to access and use the Site for
          personal, informational, and non-commercial purposes.
        </li>
        <li>
          <strong>Prohibited Activities:</strong> You agree <strong>NOT</strong>{" "}
          to:
          <ul className="list-disc list-inside ml-4">
            <li>
              Use the Site for any illegal, fraudulent, or unauthorized purpose.
            </li>
            <li>Modify, reverse-engineer, or exploit any part of the Site.</li>
            <li>
              Attempt to gain unauthorized access to our systems or networks.
            </li>
            <li>
              Use any automated means (e.g., bots, scrapers) to extract data.
            </li>
            <li>Misrepresent or falsely claim affiliation with our Site.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">3. Intellectual Property</h2>
      <p>
        All content, including text, graphics, logos, images, and software, is
        the property of <strong>{siteName}</strong> or its licensors and is
        protected by copyright, trademark, and other intellectual property laws.
        You may not copy, reproduce, distribute, or create derivative works
        without prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8">4. User-Generated Content</h2>
      <p>
        This Site <strong>does not currently</strong> allow user-generated
        content, such as comments or reviews. All content is published by{" "}
        <strong>{siteName}</strong> or authorized contributors.
      </p>
      <p>
        We may introduce a commenting feature in the future to enhance user
        engagement. If implemented, all contributions must comply with our
        content guidelines.
      </p>

      <h2 className="text-2xl font-semibold mt-8">5. Third-Party Links</h2>
      <p>
        This Site may contain links to third-party websites. We do not endorse
        or control the content, privacy policies, or security of any external
        sites. Your use of third-party links is at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        6. Disclaimer of Warranties
      </h2>
      <p>
        This Site is provided <strong>"as is" and "as available"</strong>{" "}
        without any warranties, either express or implied. We do not guarantee
        that the Site will be error-free, secure, or uninterrupted.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        7. Limitation of Liability
      </h2>
      <p>
        To the maximum extent permitted by law, <strong>{siteName}</strong>, its
        affiliates, and contributors will <strong>not</strong> be liable for:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          Any indirect, incidental, or consequential damages arising from your
          use of the Site.
        </li>
        <li>
          Loss of data, profits, or business opportunities due to reliance on
          Site content.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">8. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless <strong>{siteName}</strong>,
        its affiliates, and contributors from any claims, losses, or damages
        arising out of your use of the Site or violation of these Terms of Use.
      </p>

      <h2 className="text-2xl font-semibold mt-8">9. Changes to These Terms</h2>
      <p>
        We reserve the right to update or modify these Terms of Use at any time.
        Changes will be posted on this page with an updated "Last Updated" date.
        Your continued use of the Site constitutes acceptance of the revised
        terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8">10. Governing Law</h2>
      <p>
        These Terms of Use are governed by applicable laws, without regard to
        conflict of law principles. While this Site is accessible globally, any
        disputes arising from these terms will be resolved in accordance with
        the governing laws of the applicable jurisdiction.
      </p>

      <h2 className="text-2xl font-semibold mt-8">11. Contact Us</h2>
      <p>If you have any questions, please contact us at:</p>
      <p className="mt-2">
        <strong>Email:</strong>{" "}
        <a href={`mailto:${contactEmail}`} className="text-blue-500 underline">
          {contactEmail}
        </a>
      </p>
      <p>
        <strong>Address:</strong> {physicalAddress}
      </p>
    </div>
  );
};

export default TermsOfUse;

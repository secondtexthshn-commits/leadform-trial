// src/app/contact/page.jsx
import React from "react";

// Define metadata for the Contact page
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Property Echoes! Reach out to us via email for inquiries, feedback, or assistance. We're here to help and value your input.",
  alternates: {
    canonical: "https://propertyechoes.com/contact",
  },
};

const Contact = () => {
  const contactEmail = "propertyechoes@gmail.com"; // Replace with your contact email

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center p-5">
        How to Reach Us
      </h1>
      <p>
        We'd love to hear from you! Whether you have a question, feedback, or
        need assistance, feel free to reach out.
      </p>

      <h2 className="text-2xl font-semibold mt-8">📧 Email Us</h2>
      <p>For general inquiries, please email us at:</p>
      <p className="text-blue-500 font-semibold">
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
      <p className="mt-2">
        We strive to respond within <strong>24-48 hours</strong>. If you don't
        receive a reply, please check your spam folder or send a follow-up
        email.
      </p>

      <h2 className="text-2xl font-semibold mt-8">💬 We Value Your Feedback</h2>
      <p>
        Your feedback helps us improve! If you have suggestions, concerns, or
        ideas, please let us know. We're committed to providing the best
        experience for our users.
      </p>

      <p className="mt-6 text-gray-600">
        For content contributions or editorial partnerships, please visit our{" "}
        <a href="/write-for-us" className="text-blue-500 underline">
          Write for Us
        </a>{" "}
        page.
      </p>
    </div>
  );
};

export default Contact;

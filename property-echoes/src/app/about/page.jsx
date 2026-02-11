import React from "react";

// Metadata for the About Us page
export const metadata = {
  title: "About Us ",
  description:
    "We are passionate about real estate and committed to delivering well-researched, up-to-date information. Our team consists of industry experts, market analysts, and writers who bring you property investment strategies, market forecasts, buying and selling tips, and rental insights from around the world.",
  alternates: {
    canonical: "https://propertyechoes.com/about",
  },
};

const AboutUs = () => {
  const siteName = "Property Echoes"; // Replace with your site name
  const contactEmail = "info@propertyechoes.com"; // Replace with your contact email

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center p-5">About Us</h1>
      <p className="text-gray-700">
        Welcome to <strong>{siteName}</strong>, your go-to destination for
        expert insights, market trends, and in-depth guides on the global real
        estate industry. Whether you're a first-time homebuyer, a seasoned
        investor, or a real estate professional, our blog provides valuable
        content to help you make informed decisions.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Who We Are</h2>
      <p>
        At <strong>{siteName}</strong>, we are passionate about real estate and
        committed to delivering well-researched, up-to-date information. Our
        team consists of industry experts, market analysts, and writers who
        bring you property investment strategies, market forecasts, buying and
        selling tips, and rental insights from around the world.
      </p>

      <h2 className="text-2xl font-semibold mt-8">What We Cover</h2>
      <ul className="list-disc list-inside ml-4">
        <li>
          🌍 <strong>Global Market Trends</strong> – Stay informed about real
          estate developments in major cities worldwide.
        </li>
        <li>
          � <strong>Home Buying & Selling Guides</strong> – Expert advice to
          help you navigate the process.
        </li>
        <li>
          📈 <strong>Investment Insights</strong> – Strategies for residential,
          commercial, and rental properties.
        </li>
        <li>
          ⚖ <strong>Legal & Regulatory Updates</strong> – Understand property
          laws, taxes, and compliance requirements.
        </li>
        <li>
          💡 <strong>Expert Tips & How-To Guides</strong> – Learn the best
          practices in real estate.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
      <p>
        Our mission is to <strong>empower individuals and professionals</strong>{" "}
        with accurate, insightful, and actionable real estate knowledge. We
        believe that well-informed decisions lead to successful property
        investments and better real estate experiences.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Join Our Community</h2>
      <p>
        Follow us for the latest updates, expert opinions, and property
        insights. Whether you’re looking to buy, sell, invest, or simply stay
        informed, <strong>{siteName}</strong> is here to guide you every step of
        the way.
      </p>

      <p className="mt-6">
        📩 <strong>Have a topic in mind?</strong> Get in touch with us at{" "}
        <a href={`mailto:${contactEmail}`} className="text-blue-500 underline">
          {contactEmail}
        </a>
      </p>

      <p className="mt-6 text-gray-600">
        We also collaborate with contributors and partners. Learn more on our{" "}
        <a href="/write-for-us" className="text-blue-500 underline">
          Write for Us
        </a>{" "}
        page.
      </p>
    </div>
  );
};

export default AboutUs;

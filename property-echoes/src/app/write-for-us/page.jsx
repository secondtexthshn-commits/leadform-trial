import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Write for Us – Property Echoes | Guest Post Opportunities",
  description:
    "Contribute to Property Echoes with expert guest posts on UK property, real estate investment, and home ownership. Learn our guidelines and submit today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://propertyechoes.com/write-for-us",
  },
};

const WriteForUs = () => {
  const contactEmail = "propertyechoes@gmail.com";

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#002147]">
        Write for Us – Guest Post &amp; Collaboration Opportunities
      </h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Share your property expertise with thousands of UK homeowners, investors, and industry professionals. We welcome high-quality contributions from knowledgeable writers.
      </p>

      <div className="bg-[#f8f9fa] border-l-4 border-[#c5a059] p-6 mb-10">
        <p className="text-[#002147] font-medium">
          Property Echoes is actively seeking guest contributors who can provide valuable, actionable insights for our readers. If you have expertise in UK property matters, we would love to hear from you.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#002147] mb-4 border-b border-gray-200 pb-2">
          About Property Echoes
        </h2>
        <p className="text-gray-700 mb-4">
          Property Echoes is an independent editorial platform dedicated to providing reliable, well-researched information about the UK property market. Established to serve homeowners, first-time buyers, landlords, and property investors, we publish comprehensive guides, market analysis, and practical advice that helps our readers make informed decisions.
        </p>
        <p className="text-gray-700 mb-4">
          Our editorial team maintains strict standards for accuracy, objectivity, and reader value. We are not affiliated with estate agents, mortgage brokers, or property developers, which allows us to offer unbiased perspectives on all aspects of property ownership and investment in the United Kingdom.
        </p>
        <p className="text-gray-700">
          Each month, thousands of readers trust Property Echoes for guidance on topics ranging from <Link href="/category/buying-and-selling" className="text-[#002147] underline hover:text-[#c5a059]">buying and selling property</Link> to <Link href="/category/investment" className="text-[#002147] underline hover:text-[#c5a059]">investment strategies</Link> and <Link href="/category/guides-and-advice" className="text-[#002147] underline hover:text-[#c5a059]">practical home ownership advice</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#002147] mb-4 border-b border-gray-200 pb-2">
          Topics We Accept
        </h2>
        <p className="text-gray-700 mb-4">
          We welcome guest contributions on a wide range of UK property-related topics. Our readers are primarily based in England, Scotland, Wales, and Northern Ireland, so content should be relevant to the British property market and legal framework.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 border border-gray-200 rounded">
            <h3 className="font-semibold text-[#002147] mb-2">Buying &amp; Selling</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>First-time buyer guidance</li>
              <li>Selling strategies and timing</li>
              <li>Conveyancing and legal processes</li>
              <li>Mortgage advice and comparison</li>
            </ul>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded">
            <h3 className="font-semibold text-[#002147] mb-2">Property Investment</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>Buy-to-let strategies</li>
              <li>Rental yield analysis</li>
              <li>Portfolio management</li>
              <li>Regional market insights</li>
            </ul>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded">
            <h3 className="font-semibold text-[#002147] mb-2">Landlord &amp; Tenant</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>Legal compliance and regulations</li>
              <li>Tenant management</li>
              <li>Rental agreements</li>
              <li>Section 21 and eviction processes</li>
            </ul>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded">
            <h3 className="font-semibold text-[#002147] mb-2">Home Ownership</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>Home improvements and renovations</li>
              <li>Energy efficiency upgrades</li>
              <li>Planning permission guidance</li>
              <li>Insurance and protection</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700">
          We also consider articles on property market trends, regional housing analysis, inheritance and property tax matters, and emerging topics affecting UK homeowners. If your topic falls outside these categories, please reach out to discuss before submitting.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#002147] mb-4 border-b border-gray-200 pb-2">
          Guest Post Guidelines
        </h2>
        <p className="text-gray-700 mb-4">
          To maintain the quality our readers expect, all guest contributions must meet the following requirements:
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-[#c5a059] font-bold text-lg">1.</span>
            <div>
              <h3 className="font-semibold text-[#002147]">Original Content Only</h3>
              <p className="text-gray-700 text-sm">All submissions must be 100% original and not published elsewhere, including your own website or blog. We run plagiarism checks on all content before publication. Spinning or rewriting existing articles is not acceptable.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#c5a059] font-bold text-lg">2.</span>
            <div>
              <h3 className="font-semibold text-[#002147]">UK Relevance Required</h3>
              <p className="text-gray-700 text-sm">Content must be specifically relevant to the UK property market. References to legislation, processes, and market conditions should reflect English, Scottish, Welsh, or Northern Irish contexts as appropriate. Generic international property content will not be accepted.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#c5a059] font-bold text-lg">3.</span>
            <div>
              <h3 className="font-semibold text-[#002147]">Quality Standards</h3>
              <p className="text-gray-700 text-sm">Articles should be well-researched, factually accurate, and provide genuine value to readers. Minimum word count is 1,200 words. Content must be free from grammatical errors and written in British English spelling conventions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#c5a059] font-bold text-lg">4.</span>
            <div>
              <h3 className="font-semibold text-[#002147]">No Spam or Excessive Promotion</h3>
              <p className="text-gray-700 text-sm">Guest posts should educate and inform, not advertise. We do not accept thinly-veiled promotional content, affiliate-heavy articles, or submissions designed primarily to build backlinks. One relevant author bio link is permitted.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#c5a059] font-bold text-lg">5.</span>
            <div>
              <h3 className="font-semibold text-[#002147]">Expertise Preferred</h3>
              <p className="text-gray-700 text-sm">We prioritise contributions from industry professionals, qualified experts, and experienced practitioners. This includes estate agents, mortgage advisors, solicitors, surveyors, landlords, and property investors with demonstrable experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#002147] mb-4 border-b border-gray-200 pb-2">
          Sponsored Content &amp; Disclosure Policy
        </h2>
        <p className="text-gray-700 mb-4">
          Property Echoes maintains full transparency with our readers regarding sponsored and paid content. We believe in honest, ethical publishing practices that prioritise reader trust above all else.
        </p>
        <div className="bg-[#002147] text-white p-6 rounded mb-4">
          <h3 className="font-semibold mb-2">Our Commitment to Transparency</h3>
          <ul className="space-y-2 text-sm">
            <li>All sponsored posts are clearly labelled as such</li>
            <li>Paid partnerships are disclosed at the beginning of articles</li>
            <li>Editorial content is never influenced by commercial relationships</li>
            <li>We reserve the right to decline any content that does not meet our standards</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4">
          If you represent a company and wish to discuss sponsored content opportunities, please indicate this clearly in your initial enquiry. We offer several collaboration options including sponsored articles, brand partnerships, and expert commentary features.
        </p>
        <p className="text-gray-700">
          Sponsored content must still meet our editorial guidelines and provide genuine value to readers. We will not publish content that is misleading, makes unsubstantiated claims, or prioritises promotion over education. All sponsored content undergoes the same editorial review process as organic contributions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#002147] mb-4 border-b border-gray-200 pb-2">
          How to Submit Your Guest Post
        </h2>
        <p className="text-gray-700 mb-4">
          Ready to contribute? We have streamlined our submission process to make it as straightforward as possible. Please follow these steps:
        </p>
        <div className="bg-white border border-gray-200 rounded p-6 mb-6">
          <h3 className="font-semibold text-[#002147] mb-4">Step-by-Step Submission Process</h3>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="bg-[#c5a059] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <span><strong>Pitch your idea first.</strong> Send us a brief outline of your proposed topic, including the angle you plan to take and why it would interest our readers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#c5a059] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <span><strong>Wait for approval.</strong> Our editorial team will review your pitch within 5-7 working days and respond with feedback or approval.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#c5a059] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <span><strong>Write your article.</strong> Once approved, prepare your full article following our guidelines. Include a short author bio (50-100 words) and a professional headshot if available.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#c5a059] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <span><strong>Submit for review.</strong> Send your completed article as a Word document or Google Doc. We will review and respond within 10 working days.</span>
            </li>
          </ol>
        </div>

        <div className="bg-[#f8f9fa] p-6 rounded text-center">
          <h3 className="font-semibold text-[#002147] mb-2">Ready to Get Started?</h3>
          <p className="text-gray-700 mb-4">
            Send your pitch or enquiry to our editorial team:
          </p>
          <a
            href={`mailto:${contactEmail}?subject=Guest Post Enquiry - Property Echoes`}
            className="inline-block bg-[#002147] text-white px-8 py-3 rounded font-semibold hover:bg-[#001a38] transition-colors"
          >
            {contactEmail}
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Please include &quot;Guest Post Enquiry&quot; in your subject line for faster processing.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#002147] mb-4 border-b border-gray-200 pb-2">
          What You Get in Return
        </h2>
        <p className="text-gray-700 mb-4">
          Contributing to Property Echoes offers several benefits for qualified writers and industry professionals:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-[#c5a059]">✓</span>
            <span><strong>Exposure to a targeted UK audience</strong> – Reach thousands of homeowners, investors, and property professionals actively seeking expert guidance.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#c5a059]">✓</span>
            <span><strong>Author byline and bio</strong> – Full credit for your work with a professional author bio and one contextual link to your website or profile.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#c5a059]">✓</span>
            <span><strong>Social media promotion</strong> – Published articles are shared across our social media channels to maximise reach.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#c5a059]">✓</span>
            <span><strong>Establish thought leadership</strong> – Build your reputation as an authority in UK property matters.</span>
          </li>
        </ul>
      </section>

      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold text-[#002147] mb-4">
          Explore Our Content
        </h2>
        <p className="text-gray-700 mb-4">
          Before submitting, we recommend browsing our existing content to understand our style and the topics we cover:
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="px-4 py-2 border border-[#002147] text-[#002147] rounded hover:bg-[#002147] hover:text-white transition-colors"
          >
            Homepage
          </Link>
          <Link
            href="/category/buying-and-selling"
            className="px-4 py-2 border border-[#002147] text-[#002147] rounded hover:bg-[#002147] hover:text-white transition-colors"
          >
            Buying &amp; Selling
          </Link>
          <Link
            href="/category/investment"
            className="px-4 py-2 border border-[#002147] text-[#002147] rounded hover:bg-[#002147] hover:text-white transition-colors"
          >
            Investment
          </Link>
          <Link
            href="/category/guides-and-advice"
            className="px-4 py-2 border border-[#002147] text-[#002147] rounded hover:bg-[#002147] hover:text-white transition-colors"
          >
            Guides &amp; Advice
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WriteForUs;

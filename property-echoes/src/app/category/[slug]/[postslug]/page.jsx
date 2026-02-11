import Categories from "../../../../../components/Categories/Categories";
import PostDetails from "../../../../../components/PostDetails/PostDetails";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import LeadForm from "../../../../../components/LeadForm";
import { getPostBySlug, getAllPosts } from "../../../../lib/jsonPosts";
import { notFound } from "next/navigation";

import Script from "next/script";

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug, postslug } = await params;
  const post = getPostBySlug(postslug);
  const postDetails = post?.node;

  return {
    title: postDetails?.title || "Default Title",
    description: postDetails?.excerpt || "Default Description",
    alternates: {
      canonical: `https://propertyechoes.com/category/${postDetails?.category[0]?.slug}/${postDetails?.slug}`,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug, postslug } = await params;

  // Fetch post details from JSON
  const post = getPostBySlug(postslug);
  const postDetails = post?.node;

  if (!postDetails) {
    return notFound();
  }

  // Use local posts for widget
  const postsDataFetched = getAllPosts();

  // Find related posts from the same category
  const relatedPosts = postsDataFetched
    .filter(
      (p) =>
        p.node.slug !== postDetails.slug &&
        p.node.category.some((c) =>
          postDetails.category.some((dc) => dc.slug === c.slug)
        )
    )
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postDetails.title,
    "description": postDetails.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Property Echoes Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Property Echoes"
    },
    "datePublished": postDetails.date,
    "dateModified": postDetails.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://propertyechoes.com/category/${postDetails.category[0].slug}/${postDetails.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://propertyechoes.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": postDetails.category[0].name,
        "item": `https://propertyechoes.com/category/${postDetails.category[0].slug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": postDetails.title,
        "item": `https://propertyechoes.com/category/${postDetails.category[0].slug}/${postDetails.slug}`
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {postDetails.slug === "estate-agent-fees" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much do estate agents charge in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most estate agents charge between 1% and 3% plus VAT, with the average around 1.2%–1.5% plus VAT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do estate agents charge if the house doesn’t sell?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most traditional agents work on a no sale, no fee basis, so you usually won’t pay if your property doesn’t sell."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who pays estate agent fees in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In the UK, the seller pays estate agent fees. Buyers do not pay agent commission."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are estate agent fees negotiable?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, estate agent fees are fully negotiable, particularly in competitive markets."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is VAT included in estate agent fees?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VAT is usually not included unless stated. Always confirm whether quoted fees are plus VAT at 20%."
                  }
                }
              ]
            })
          }}
        />
      )}
      {postDetails.slug === "how-estate-agent-commission-works-uk" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much commission do estate agents make in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most estate agents in the UK charge between 1% and 3% plus VAT. The typical estate agent commission is around 1.2% to 1.5% plus VAT, depending on the agent and location."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is estate agent commission calculated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Estate agent commission is calculated as a percentage of the final sale price of the property, not the asking price. It is agreed before the property is marketed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who pays estate agent commission in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In the UK, estate agent commission is paid by the seller. Buyers do not pay estate agent fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When do you pay estate agent commission?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Estate agent commission is usually paid after the sale completes and is often deducted from the sale proceeds by the seller’s solicitor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is VAT charged on estate agent commission?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, VAT at 20% is charged on estate agent commission in the UK unless the fee is clearly stated as VAT inclusive."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can estate agent commission be negotiated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, estate agent commission is negotiable. Sellers can often reduce commission rates by comparing agents, negotiating upfront, or agreeing to a sole agency contract."
                  }
                }
              ]
            })
          }}
        />
      )}
      {postDetails.slug === "hidden-costs-when-selling-a-house-uk" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does it cost to sell a house in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The total cost of selling a house in the UK usually ranges from 2% to 5% of the final sale price, including estate agent fees, legal costs, EPCs, and moving expenses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are estate agent selling fees included in total selling costs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Estate agent selling fees in the UK are typically the largest part of the total cost and are charged as a percentage of the final sale price plus VAT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I calculate the cost of selling a house in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Using a cost of selling a house UK calculator or a structured breakdown like the one above can help you estimate selling costs accurately."
                  }
                }
              ]
            })
          }}
        />
      )}
      {postDetails.slug === "vat-on-estate-agent-fees" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much is VAT on estate agent fees?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VAT is charged at 20% on estate agent fees in the UK."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the VAT rate on estate agents’ fees?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The VAT rate on estate agents’ fees is 20%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is VAT included in estate agent fees?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VAT is usually not included unless stated. Always check whether fees are quoted plus VAT or including VAT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do online estate agents charge VAT?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Online estate agents also charge VAT at 20% on their fees."
                  }
                }
              ]
            })
          }}
        />
      )}
      {postDetails.slug === "estate-agent-fees-calculator" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Estate Agent Fees Calculator UK",
                "operatingSystem": "All",
                "applicationCategory": "FinanceApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "GBP"
                }
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much do estate agents charge in the UK?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most estate agents charge between 1% and 3% plus VAT, with the average around 1.2% to 1.5% plus VAT."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do estate agent fees include VAT?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "VAT is usually not included in quoted fees unless explicitly stated. It is charged at the standard UK rate of 20% on top of the commission."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can estate agent fees be negotiated?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, estate agent fees are fully negotiable. Sellers can often lower the rate by comparing multiple agents or negotiating before signing a contract."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When do you pay estate agent fees?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Fees are typically paid upon completion of the property sale, usually deducted from the proceeds by your solicitor."
                    }
                  }
                ]
              })
            }}
          />
        </>
      )}
      <div className="container bg-transparent text-black mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="flex flex-col m-2 min-h-screen lg:col-span-8">
            <PostDetails details={postDetails} relatedPosts={relatedPosts} />
            {!["about", "contact", "privacy-policy", "terms-of-use"].includes(postDetails.slug) && (
              <div className="mt-12 flex justify-center">
                <LeadForm leadSource={postDetails.slug} />
              </div>
            )}
          </div>

          <div className="lg:col-span-4 bg-transparent">
            <div className="space-y-10 sticky top-24 p-5">
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#002147] mb-4 uppercase">Search Articles</h3>
                <SearchBar />
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#002147] mb-6 uppercase">Editorial Topics</h3>
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

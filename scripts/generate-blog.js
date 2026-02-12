const fs = require("fs");
const fetch = require("node-fetch");

const OPENAI_KEY = process.env.OPENAI_API_KEY;

async function generateBlog(topic) {
  const prompt = `
You are an expert UK SEO strategist and conversion-focused real estate copywriter.

Your task is to create a 2,200–2,500 word high-converting authority money page and provide suitable banner image for the topic provided below.

IMPORTANT:
Output ONLY valid JSON matching the schema provided.
Do NOT include any explanations.
Do NOT include markdown.
Use PURE HTML inside content.html.
Escape quotes properly.
Include internal links using <a href="/slug/">anchor text</a>.

========================
SCHEMA (STRICT FORMAT)
========================

{
  "author": {
    "bio": "",
    "name": "Starberry",
    "id": "cm7g7qcxl102z07pktc7xdizh",
    "photo": {
      "url": "https://ap-south-1.graphassets.com/cm7f45wji05e607pbfl1g7vpy/cm7g7pv60102f07ofawzvtsoa"
    }
  },
  "createdAt": "ISO DATE",
  "slug": "",
  "title": "",
  "excerpt": "",
  "featuredImage": {
    "url": "UNSPLASH IMAGE URL RELATED TO TOPIC",
    "alt": ""
  },
  "category": [
    {
      "name": "Guides & Advice",
      "slug": "guides-and-advice"
    }
  ],
  "content": {
    "html": "FULL HTML ARTICLE HERE"
  }
}

========================
PAGE REQUIREMENTS
========================

UK English  
Professional authoritative tone  
Written for UK homeowners or sellers  
SEO optimised  
Conversion structured  
Skimmable formatting  
Clear H2/H3 hierarchy  
Tables where relevant  
Bullet points where helpful  
No fluff  
No keyword stuffing  

========================
STRUCTURE YOU MUST FOLLOW
========================

1️⃣ SEO Title (H1)
Format:
[Primary Topic] (2026 Guide): Clear benefit or question hook

2️⃣ URL Structure
Create clean slug:
/primary-topic-slug/

3️⃣ Introduction
First 150 words must:
- Address seller confusion
- Include realistic UK numbers
- Highlight cost savings opportunity
- Position comparison as smart choice

Insert CTA after intro:

Get 3 Free Quotes in Your Area  
No obligation. Compare services & fees instantly.

========================
CORE CONTENT SECTIONS
========================

H2: What Is [Primary Topic]?
Include internal links naturally:
/estate-agent-fees-uk/
/estate-agent-commission-uk/
/average-estate-agent-fees/

H2: How Does It Work?
Include:
Step-by-step process
Example scenario
Payment stage
Table if financial

Reference:
/when-do-you-pay-estate-agent-fees/
/do-you-pay-if-house-doesnt-sell/
/no-sale-no-fee-estate-agents/

H2: Costs / Financial Breakdown
Include:
UK examples £200k, £300k, £500k
VAT discussion
Additional fees
Table

Reference:
/estate-agent-fees-vat/
/estate-agent-fees-calculator/
/cost-of-selling-house-uk/
/solicitor-fees-selling-house/
/epc-cost-selling-house/
/capital-gains-tax-selling-property/
/total-fees-selling-house/

H2: Comparison Section
Compare:
Online vs High Street
Commission vs Fixed Fee
Sole vs Multi Agency
DIY vs Professional

Include table.

Link:
/online-vs-high-street-estate-agent-fees/
/commission-vs-fixed-fee-estate-agents/
/sole-agency-vs-multi-agency/
/are-online-estate-agents-cheaper/
/purplebricks-vs-traditional-estate-agents/
/best-estate-agents-uk/
/cheapest-estate-agents-uk/
/compare-estate-agents-near-me/

H2: Can You Negotiate / Optimise This?

Reference:
/negotiate-estate-agent-fees/
/reduce-estate-agent-commission/
/estate-agent-contract-length/
/estate-agent-tie-in-period/
/hidden-estate-agent-fees/

Insert SECOND CTA.

H2: What Is Included / What Should You Expect?

Include bullet list:
Marketing
Photography
Portal listings
Negotiation
Sales progression

Reference:
/documents-needed-to-sell-house/
/how-long-to-sell-house-uk/
/best-way-to-sell-property/
/sell-house-without-estate-agent/
/selling-inherited-property-uk/
/selling-house-during-divorce/
/selling-house-with-tenants/
/what-if-house-doesnt-sell/
/change-estate-agent-before-contract-ends/

H2: How to Reduce Costs / Maximise Results

Reference:
/increase-house-value-before-selling/
/house-valuation-online-uk/
/estate-agent-valuation-vs-online/
/online-house-valuation-accuracy/
/what-affects-house-prices-uk/

Insert THIRD CTA.

H2: Topic in Major UK Cities

Include internal links:
/estate-agent-fees-london/
/estate-agent-fees-manchester/
/estate-agent-fees-birmingham/
/estate-agent-fees-leeds/
/estate-agent-fees-bristol/
/estate-agent-fees-liverpool/
/estate-agent-fees-sheffield/
/estate-agent-fees-nottingham/
/estate-agent-fees-leicester/
/estate-agent-fees-newcastle/
/estate-agent-fees-croydon/
/estate-agent-fees-hackney/
/estate-agent-fees-salford/
/estate-agent-fees-camden/
/estate-agent-fees-reading/

H2: FAQs
5–7 questions
60–120 word answers

========================
INTERNAL LINKING RULES
========================

Use natural anchor text  
Include 8–15 links total  
Reference pillar pages:
/estate-agent-fees-uk/
/how-to-sell-your-house-uk/
/house-valuation-online-uk/

========================
CONTENT LENGTH RULE
========================

Minimum: 2200 words  
Ideal: 2300–2500 words  

========================
Primary Topic:
${topic}
`;


  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
}

async function run() {
  const topics = fs.readFileSync("topics.txt", "utf8")
    .split("\n")
    .filter(Boolean);

  if (topics.length === 0) {
    console.log("No topics left");
    return;
  }

  const topic = topics.shift();
  console.log("Generating blog for:", topic);

  const newPost = await generateBlog(topic);

  const postsPath = "property-echoes/content/posts.json";
  const posts = JSON.parse(fs.readFileSync(postsPath));

  posts.unshift(newPost);

  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));

  fs.writeFileSync("topics.txt", topics.join("\n"));

  console.log("Blog added successfully");
}

run();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  allowedDevOrigins: ['*.replit.dev', '*.pike.replit.dev', '*.replit.app', '*.sisko.replit.dev', 'localhost', '127.0.0.1'],
  async redirects() {
    return [
      {
        source: '/guides-and-advice/loft-conversion-cost-calculator',
        destination: '/category/guides-and-advice/loft-conversion-cost-calculator',
        permanent: true,
      },
      {
        source: '/guides-and-advice/dormer-loft-conversion-cost-uk',
        destination: '/category/guides-and-advice/dormer-loft-conversion-cost-uk',
        permanent: true,
      },
      {
        source: '/guides-and-advice/solicitors-fees-for-buying-a-house',
        destination: '/category/guides-and-advice/solicitors-fees-for-buying-a-house',
        permanent: true,
      },
      {
        source: '/guides-and-advice/best-rates-for-remortgages-uk',
        destination: '/category/guides-and-advice/best-rates-for-remortgages-uk',
        permanent: true,
      },
      {
        source: '/guides-and-advice/fensa-certificate',
        destination: '/category/guides-and-advice/fensa-certificate',
        permanent: true,
      },
      {
        source: '/guides-and-advice/indemnity-insurance-on-a-house',
        destination: '/category/guides-and-advice/indemnity-insurance-on-a-house',
        permanent: true,
      },
      {
        source: '/guides-and-advice/solicitors-fees-for-selling-a-house',
        destination: '/category/guides-and-advice/solicitors-fees-for-selling-a-house',
        permanent: true,
      },
      {
        source: '/guides-and-advice/exchange-and-completion-same-day',
        destination: '/category/guides-and-advice/exchange-and-completion-same-day',
        permanent: true,
      },
      {
        source: '/buying-and-selling/how-much-is-my-house-worth',
        destination: '/category/buying-and-selling/how-much-is-my-house-worth',
        permanent: true,
      },
      {
        source: '/guides-and-advice/estate-agent-fees-calculator',
        destination: '/category/guides-and-advice/estate-agent-fees-calculator',
        permanent: true,
      },
      {
        source: '/guides-and-advice/vat-on-estate-agent-fees',
        destination: '/category/guides-and-advice/vat-on-estate-agent-fees',
        permanent: true,
      },
      {
        source: '/guides-and-advice/hidden-costs-when-selling-a-house-uk',
        destination: '/category/guides-and-advice/hidden-costs-when-selling-a-house-uk',
        permanent: true,
      },
      {
        source: '/guides-and-advice/how-estate-agent-commission-works-uk',
        destination: '/category/guides-and-advice/how-estate-agent-commission-works-uk',
        permanent: true,
      },
      {
        source: '/guides-and-advice/estate-agent-fees',
        destination: '/category/guides-and-advice/estate-agent-fees',
        permanent: true,
      },
      {
        source: '/guides-and-advice/sell-house-quickly',
        destination: '/category/guides-and-advice/sell-house-quickly',
        permanent: true,
      },
      {
        source: '/buying-and-selling/average-time-to-sell-a-house-uk',
        destination: '/category/buying-and-selling/average-time-to-sell-a-house-uk',
        permanent: true,
      },
      {
        source: '/guides-and-advice/cheapest-places-to-live-uk',
        destination: '/category/guides-and-advice/cheapest-places-to-live-uk',
        permanent: true,
      },
      {
        source: '/guides-and-advice/part-ownership-scheme',
        destination: '/category/guides-and-advice/part-ownership-scheme',
        permanent: true,
      },
      {
        source: '/buying-and-selling/stamp-duty-on-second-home',
        destination: '/category/buying-and-selling/stamp-duty-on-second-home',
        permanent: true,
      },
      {
        source: '/buying-and-selling/how-to-make-offer-on-home',
        destination: '/category/buying-and-selling/how-to-make-offer-on-home',
        permanent: true,
      },
      {
        source: '/guides-and-advice/house-survey-guide',
        destination: '/category/guides-and-advice/house-survey-guide',
        permanent: true,
      },
      {
        source: '/buying-and-selling/how-long-does-it-take-to-buy-a-house-uk',
        destination: '/category/buying-and-selling/how-long-does-it-take-to-buy-a-house-uk',
        permanent: true,
      },
      {
        source: '/buying-and-selling/when-to-walk-away-from-property-sale-guide-ringwood-buyers',
        destination: '/category/buying-and-selling/when-to-walk-away-from-property-sale-guide-ringwood-buyers',
        permanent: true,
      },
      {
        source: '/investment/best-property-investment-books-ultimate-list',
        destination: '/category/investment/best-property-investment-books-ultimate-list',
        permanent: true,
      },
      {
        source: '/renting/realistic-rental-valuations-prevent-bidding-wars-leamington-spa',
        destination: '/category/renting/realistic-rental-valuations-prevent-bidding-wars-leamington-spa',
        permanent: true,
      },
      {
        source: '/lifestyle/elevating-home-updating-fixtures-hardware-modern-touch',
        destination: '/category/lifestyle/elevating-home-updating-fixtures-hardware-modern-touch',
        permanent: true,
      },
      {
        source: '/market-news/mansfield-property-market-digital-transformation',
        destination: '/category/market-news/mansfield-property-market-digital-transformation',
        permanent: true,
      },
      {
        source: '/investment/maximising-roi-home-renovations',
        destination: '/category/investment/maximising-roi-home-renovations',
        permanent: true,
      },
      {
        source: '/renting/preventative-measures-rental-home-emergencies',
        destination: '/category/renting/preventative-measures-rental-home-emergencies',
        permanent: true,
      },
      {
        source: '/buying-and-selling/understanding-estate-agent-metrics-home-worth',
        destination: '/category/buying-and-selling/understanding-estate-agent-metrics-home-worth',
        permanent: true,
      },
      {
        source: '/market-news/labour-housing-plans-homeowners-renters',
        destination: '/category/market-news/labour-housing-plans-homeowners-renters',
        permanent: true,
      },
      {
        source: '/guides-and-advice/tech-trends-smart-home-technology-property-management',
        destination: '/category/guides-and-advice/tech-trends-smart-home-technology-property-management',
        permanent: true,
      },
      {
        source: '/buying-and-selling/how-to-finance-small-holding-purchase-uk',
        destination: '/category/buying-and-selling/how-to-finance-small-holding-purchase-uk',
        permanent: true,
      },
      {
        source: '/guides-and-advice/remote-property-letting-uk-guide',
        destination: '/category/guides-and-advice/remote-property-letting-uk-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

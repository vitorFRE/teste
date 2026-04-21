import { getSiteUrl } from "./site-config";

const DESCRIPTION =
  "Digital marketing agency: SEO, PPC, social media marketing, content creation, and campaigns that help businesses grow online.";

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const orgId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: "Positivus",
      url: siteUrl,
      logo: `${siteUrl}/Logo.svg`,
      description: DESCRIPTION,
      email: "info@positivus.com",
      telephone: "+1-555-567-8901",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1234 Main St",
        addressLocality: "Moonstone City",
        addressRegion: "Stardust State",
        postalCode: "12345",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Positivus — Digital Marketing Agency",
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": orgId },
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

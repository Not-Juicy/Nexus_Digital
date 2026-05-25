import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export default function SEO({ title, description, image, article }: SEOProps) {
  const defaultTitle = 'Nexus Digital | High-Performance Digital Agency';
  const defaultDescription = 'Nexus Digital is a premium digital marketing and SaaS strategy agency based in Cambodia, serving ambitious brands globally.';
  const siteUrl = 'https://nexusdigital.asia'; // Placeholder URL
  const defaultImage = '/img/Nexus-Digital-1.png';

  const seo = {
    title: title ? `${title} | Nexus Digital` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

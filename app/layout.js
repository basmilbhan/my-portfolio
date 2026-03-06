import './globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'Milan Bhandari — Frontend, Shopify & WordPress Developer',
  description: 'Milan Bhandari is a frontend web developer from Kathmandu, Nepal, specializing in Shopify and WordPress development for fast, modern websites.',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Milan Bhandari",
      "url": "https://milanbhandari.info.np",
      "image": "https://milanbhandari.info.np/og-image.jpg",
      "jobTitle": "Frontend Web Developer",
      "description": "Frontend web developer from Kathmandu, Nepal, specializing in Shopify and WordPress development.",
      "email": "mailto:milanbhandari04@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati Province",
        "addressCountry": "NP"
      },
      "sameAs": [
        "https://github.com/basmil159",
        "https://www.linkedin.com/in/milan-bhandari-0405b3185/",
        "https://www.facebook.com/share/174mgmL821/"
      ],
      "knowsAbout": [
        "Shopify", "WordPress", "WooCommerce", "Liquid Templating", "NextJS",
        "React", "JavaScript", "HTML", "CSS", "SEO", "Frontend Development"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Frontend Web Developer",
        "occupationLocation": {
          "@type": "City",
          "name": "Kathmandu"
        },
        "skills": "Shopify, WordPress, WooCommerce, React, NextJs, JavaScript, HTML, CSS"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://milanbhandari.info.np"
      }
    })
  }}
/>

      <body>{children}</body>
    </html>
  )
}

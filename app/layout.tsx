import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { defaultOgImage, siteDescription, siteName, siteUrl } from "./seo";

const siteTitle = `${siteName} | Bangalore Wedding Photography & Films`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Leading Lines Photography",
  title: {
    default: siteTitle,
    template: "%s | Leading Lines Photography",
  },
  description: siteDescription,
  keywords: [
    "Leading Lines Photography",
    "Bangalore wedding photographer",
    "Bengaluru wedding photography",
    "wedding films Bangalore",
    "pre wedding photography Bangalore",
    "Indian wedding photography",
    "candid wedding photographer Bangalore",
    "wedding photography and films",
  ],
  authors: [{ name: "Leading Lines Photography" }],
  creator: "Leading Lines Photography",
  publisher: "Leading Lines Photography",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Leading Lines Photography",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Leading Lines Photography wedding photography and films",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-leading-lines.png", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "PhotographyBusiness",
  "@id": `${siteUrl.toString()}#business`,
  name: "Leading Lines Photography",
  url: siteUrl.toString(),
  image: new URL(defaultOgImage, siteUrl).toString(),
  logo: new URL("/logo-leading-lines.png", siteUrl).toString(),
  description: siteDescription,
  telephone: "+91-7604025885",
  email: "Info@llpstudio.com",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unishire Victory, 2nd Main Rd, Guttahalli",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560003",
    addressCountry: "IN",
  },
  areaServed: ["Bengaluru", "Karnataka", "India"],
  sameAs: [
    "https://www.instagram.com/leadinglinesphotography1",
    "https://youtube.com/@leadinglinesphotography6666",
    "https://www.facebook.com/share/1aj4JaWHCg/",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Wedding photography and films",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pre-wedding photography",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Family event and portrait photography",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Comfortaa:400,700&display=swap"
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '926888066654011');
fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=926888066654011&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

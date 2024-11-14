import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import GetNavbar from "@/components/getnavbar";
import { urlForImage } from "@/lib/sanity/image";
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "Naijahot News - Get latest news in Nigeria and Africa",
      template: "%s | Naijahot News"
    },
   
    description:
      settings?.description ||
      "Get tthe latest breaking newws in Abuja, Lagos, Port harcourt, Accra, Egypt, Johannesburg",
    keywords: ["Latest News", "Breaking News", "Nigeria", "Abuja", "Lagos", "Information", "Journalists"],
    authors: [{ name: "Ogar Emmanuel" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/brnews.png",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "NaijahotNews",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
   
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>

        <head>
       
<script async src="https://www.googletagmanager.com/gtag/js?id=G-HB9ETJ3BVV" />
<Script src="/analytics.js" />
        <meta name="4a31c1f05f765d4fb24fda4a5904a040a4a0c9f9" content="4a31c1f05f765d4fb24fda4a5904a040a4a0c9f9" />
        </head>
 
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <GetNavbar {...settings} />
          <div>{children}</div>
          <Footer {...settings} />
        </Providers>
        <Analytics/>
        <Script src="/ad1money.js" />
        <Script src="/second-ad(banner)" />
        <Script src="/pushads.js" />
        <Script src="/videoads.js" />
      </body>
    </html>
  );
}

export const revalidate = 1;

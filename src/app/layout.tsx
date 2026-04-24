import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruisaike.com"),
  title: {
    default: "锐赛克 - 化学法废塑料再生技术引领者",
    template: "%s | 锐赛克",
  },
  description: "锐赛克是一家专注于化学法废塑料再生技术的低碳新材料独角兽企业，致力于通过创新技术实现塑料循环利用。",
  keywords: ["废塑料再生", "化学法技术", "DMT", "乙二醇", "塑料循环利用", "低碳新材料", "环保技术", "可持续发展"],
  authors: [{ name: "锐赛克" }],
  creator: "锐赛克",
  publisher: "锐赛克",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://ruisaike.com",
    siteName: "锐赛克",
    title: "锐赛克 - 化学法废塑料再生技术引领者",
    description: "锐赛克是一家专注于化学法废塑料再生技术的低碳新材料独角兽企业，致力于通过创新技术实现塑料循环利用。",
    images: [
      {
        url: "/img/carousel-1.webp",
        width: 1200,
        height: 630,
        alt: "锐赛克 - 化学法废塑料再生技术",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "锐赛克 - 化学法废塑料再生技术引领者",
    description: "锐赛克是一家专注于化学法废塑料再生技术的低碳新材料独角兽企业",
    images: ["/img/carousel-1.webp"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "锐赛克",
              alternateName: "Rescye",
              url: "https://ruisaike.com",
              logo: "https://ruisaike.com/img/logo.png",
              description:
                "锐赛克是一家专注于化学法废塑料再生技术的低碳新材料独角兽企业，致力于通过创新技术实现塑料循环利用。",
              address: {
                "@type": "PostalAddress",
                addressLocality: "杭州",
                addressRegion: "浙江",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+86-13476129009",
                contactType: "business",
                email: "contact@rescye.com",
              },
              sameAs: [],
            }),
          }}
        />
        <LanguageProvider>
          <main className="flex-1 w-full overflow-x-hidden">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}

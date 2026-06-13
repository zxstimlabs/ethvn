import { Geist_Mono, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: 'ETH Việt Nam',
  description: 'Bách khoa toàn thư mở về Ethereum.',
  metadataBase: new URL('https://www.eth.vn'),
  openGraph: {
    title: 'ETH Việt Nam',
    description: 'Bách khoa toàn thư mở về Ethereum.',
    url: 'https://www.eth.vn',
    siteName: 'ETH Việt Nam',
    images: [
      {
        url: '/ethvn-tbn.png',
        width: 1200,
        height: 630,
        alt: 'og-image',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETH Việt Nam',
    description: 'Bách khoa toàn thư mở về Ethereum.',
    creator: '@ethdotvn',
    images: ['/ethvn-tbn.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

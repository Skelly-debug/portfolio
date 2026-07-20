import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Stefanos Poulimas — Full Stack Developer & Musician",
  description:
    "Portfolio of Stefanos Poulimas, a full stack developer and musician building dynamic web applications and playing guitar on the side.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "Portfolio, Stefanos Poulimas, Poulimas, Στέφανος Πουλημάς, Πουλημάς, Full Stack Developer, Musician",
  authors: [{ name: "Stefanos Poulimas" }],
  creator: "Stefanos Poulimas",
  publisher: "Stefanos Poulimas",
  openGraph: {
    title: "Stefanos Poulimas — Full Stack Developer & Musician",
    description:
      "Portfolio of Stefanos Poulimas, a full stack developer and musician building dynamic web applications and playing guitar on the side.",
    url: "https://skellyportfolio.vercel.app/",
    siteName: "Stefanos Poulimas — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-ink text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

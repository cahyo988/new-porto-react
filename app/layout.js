import { Poppins, Fraunces } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
});
const fraunces_init = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-fraunces",
});

export const metadata = {
  title: "CahyoDev",
  description:
    "Fullstack Developer & Designer...",
  icons: {
    icon: [{ url: "/icon.png?v=2", type: "image/png" }],
    apple: [{ url: "/icon.png?v=2", type: "image/png" }],
    shortcut: "/icon.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins_init.variable} ${fraunces_init.variable}`}>
        {children}

        {/* Monetag Script (client-side only) */}
        <Script
          src="https://3nbf4.com/act/files/tag.min.js?z=10202860"
          data-cfasync="false"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

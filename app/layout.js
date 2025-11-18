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
  description: "Fullstack Developer & Designer...",
  icons: {
    icon: [{ url: "/icon.png?v=2", type: "image/png" }],
    apple: [{ url: "/icon.png?v=2", type: "image/png" }],
    shortcut: "/icon.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="monetag-onclick" strategy="afterInteractive">
          {`(function(s){s.dataset.zone='10202962',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));`}
        </Script>
      </head>

      <body className={`${poppins_init.variable} ${fraunces_init.variable}`}>
        {children}
      </body>
    </html>
  );
}

import { Poppins, Fraunces } from "next/font/google";
import "./globals.css";

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
    "Fullstack Developer & Designer yang passionate dalam menciptakan solusi digital inovatif. Spesialisasi dalam React, Next.js, Laravel, dan modern web technologies.",
  icons: {
    icon: [
      {
        url: "/icon.png?v=2",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icon.png?v=2",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://3nbf4.com/act/files/tag.min.js?z=10202860" data-cfasync="false" async></script>
      </head>
      <body className={`${poppins_init.variable} ${fraunces_init.variable}`}>
        {children}
      </body>
    </html>
  );
}

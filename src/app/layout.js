/* eslint-disable new-cap */
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--urbanist-font",
});

export const metadata = {
  title: "UCR Swim Club",
  description:
    "Uniting swimmers together here at UC Riverside and competing in competitions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body className=" bg-white text-black w-screen overflow-x-hidden font-urbanist">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

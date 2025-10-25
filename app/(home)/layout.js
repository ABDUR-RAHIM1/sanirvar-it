import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ContextApi from "@/ContextApi/ContextApi";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sonirvor Computer Training Institute",
  description: "Founder Of Arman Rony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <ContextApi>
          <Navbar/>
          {children}
        </ContextApi>
      </body>
    </html>
  );
}

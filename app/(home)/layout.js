import { Noto_Sans_Bengali } from "next/font/google";
import "../globals.css";
import ContextApi from "@/ContextApi/ContextApi";
import Navbar from "../components/Navbar";
 
const notoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "700"], // চাইলে শুধু 400 দিলেও হবে
  subsets: ["bengali"],
  variable: "--font-noto-sans-bengali",
});

export const metadata = {
  title: "Sonirvor Computer Training Institute",
  description: "Founder Of Arman Rony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn"> 
      <body
        className={`${notoSansBengali.className} font-sans antialiased`}
        cz-shortcut-listen="true"
      >
        <ContextApi>
          <Navbar />
          {children}
        </ContextApi>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "../../globals.css";
import ContextApi from "@/ContextApi/ContextApi";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

// বাংলা ফন্ট লোড করা
const notoSansBengali = Noto_Sans_Bengali({
    weight: ["400", "500", "700"], // চাইলে শুধু 400 দিলেও হবে
    subsets: ["bengali"],
    variable: "--font-noto-sans-bengali",
});


export const metadata = {
    title: "Admin Dashboard",
    description: "Sonirvor Computer Training Institute",
};

export default function AdminRootLayout({ children }) {
    return (
        <html lang="bn">  
            <body
                className={`${notoSansBengali.className} font-sans antialiased`}
                cz-shortcut-listen="true"
            >
                <ContextApi>
                    <Toaster />
                    <div className="flex h-screen overflow-hidden">
                        <Sidebar />

                        <main className="flex-1 p-4 h-screen overflow-y-scroll">
                            {children}
                        </main>

                    </div>
                </ContextApi>
            </body>
        </html>
    );
}

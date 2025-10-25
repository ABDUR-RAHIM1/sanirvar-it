import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import ContextApi from "@/ContextApi/ContextApi";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Admin Dashboard",
    description: "Sonirvor Computer Training Institute",
};

export default function AdminRootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                cz-shortcut-listen="true"
            >
                <ContextApi>
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

"use client";
import Link from "next/link";
import AccountButton from "./AccountButton";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const path = usePathname();

    const navItems = [
        { item: "হোম", path: "/" },
        { item: "কোর্স সমুহ", path: "/courses" },
        { item: "প্রশাসনিক জনবল", path: "/administrative" },
        { item: "আমাদের সম্পর্কে", path: "/about-us" },
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleItemClick = () => setMenuOpen(false); // ক্লিক করলে menu বন্ধ হবে

    return (
        <nav className="bg-white shadow-md sticky top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    স্বনির্ভর ইন্সটিটিউট
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            className={`${path === item.path ? "text-blue-500 border-b border-b-blue" : ""
                                } font-medium text-[13px] hover:text-blue-500 hover:border-b border-b-blue-500`}
                        >
                            {item.item}
                        </Link>
                    ))}
                </div>

                {/* Account Button */}
                <div className="hidden md:block">
                    <AccountButton />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-md">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            onClick={handleItemClick}
                            className={`block font-medium text-[14px] ${path === item.path ? "text-blue-500" : "text-gray-700"
                                } hover:text-blue-500`}
                        >
                            {item.item}
                        </Link>
                    ))}

                    {/* Account Button for Mobile */}
                    <div className="pt-2">
                        <AccountButton />
                    </div>
                </div>
            )}
        </nav>
    );
}

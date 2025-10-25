"use client";
import { Button } from "@/components/ui/button";
import { globalContext } from "@/ContextApi/ContextApi";
import { LogIn, User, LogOut } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function AccountButton() {
    const { studentLogin, setStudentLogin } = useContext(globalContext);
    const router = useRouter();
    
    const handleLogOut = () => {
        setStudentLogin(false)
        router.push("/")
    }


    if (studentLogin) {
        // ✅ লগইন করা থাকলে প্রোফাইল মেনু দেখাবে
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="rounded-full bg-blue-500 text-white shadow-md w-[150px] flex items-center gap-2">
                        <User className="w-4 h-4" />
                        প্রোফাইল
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>আমার অ্যাকাউন্ট</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href="/profile">ড্যাশবোর্ড</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/settings">সেটিংস</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-red-600"
                        onClick={handleLogOut}
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        লগআউট
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    // ❌ লগইন করা না থাকলে অ্যাকাউন্ট বাটন
    return (
        <Button
            asChild
            className="rounded-full bg-blue-500 text-white cursor-pointer shadow-md w-[150px]"
        >
            <Link href={"/account"}>
                <LogIn className="w-4 h-4" />
                অ্যাকাউন্ট
            </Link>
        </Button>
    );
}

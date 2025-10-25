"use client";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import React from "react";
 

export default function AccountButton() {
  
    return (
        <Button
            asChild
            className="rounded-full bg-blue-500 text-white cursor-pointer shadow-md w-[150px]"
        >
            <Link href={"/admission"}>
                <LogIn className="w-4 h-4" />
                ভর্তি হন
            </Link>
        </Button>
    );
}

"use client";
import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { globalContext } from "@/ContextApi/ContextApi";

export default function Account() {
    const { studentLogin, setStudentLogin } = useContext(globalContext)
    const router = useRouter();
    const [formChange, setFormChange] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        aggree: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        try {

            alert("কাজ চলতেছে!");
            setStudentLogin(true)
            router.push("/profile")

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white p-6">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Left Side - Text / Info */}
                <div className="flex flex-col justify-center p-10 bg-blue-600 text-white">
                    <h2 className="text-4xl font-extrabold mb-6">স্বাগতম!</h2>
                    <p className="text-lg leading-relaxed">
                        স্বনির্ভর কম্পিউটার ইন্সটিটিউটে রেজিস্ট্রেশন করুন।
                        আমাদের সাথে যুক্ত হয়ে আপনার কম্পিউটার দক্ষতা উন্নত করুন
                        এবং বিভিন্ন প্রোগ্রামিং ও সফটওয়্যার শেখার সুযোগ নিন।
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-col justify-center p-10 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">রেজিস্ট্রেশন ফর্ম</h3>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4">
                        {
                            formChange &&
                            <Input placeholder="আপনার নাম" className="border-gray-300 focus:ring-blue-400" />}

                        <Input type="email" placeholder="ইমেইল" className="border-gray-300 focus:ring-blue-400" />
                        <Input type="password" placeholder="পাসওয়ার্ড" className="border-gray-300 focus:ring-blue-400" />
                        {
                            formChange &&
                            <Input type="password" placeholder="পাসওয়ার্ড নিশ্চিত করুন" className="border-gray-300 focus:ring-blue-400" />}

                        {
                            formChange &&
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label htmlFor="terms" className="text-gray-600">
                                    শর্তাবলী ও নীতিমালা গ্রহণ করছি
                                </label>
                            </div>}

                        <Button type={"submit"} className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                            {
                                formChange ? "রেজিস্টার" : "লগইন"
                            }
                        </Button>
                    </form>
                    <div className="text-gray-500 text-sm mt-4">
                        {
                            formChange ? "ইতিমধ্যেই অ্যাকাউন্ট আছে?" : "কোন অ্যাকাউন্ট নেই?"
                        }

                        <span onClick={() => setFormChange(!formChange)} className="text-blue-600 font-medium hover:underline cursor-pointer ml-2">
                            {
                                formChange ? "লগইন করুন" : "রেজিস্টার"
                            }
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

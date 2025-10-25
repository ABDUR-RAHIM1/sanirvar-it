import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// ৬টি মূল সুবিধার ডেটা
const benefits = [
    {
        icon: '💼',
        title: "উন্নত ক্যারিয়ার ও চাকরি",
        description: "প্রায় প্রতিটি আধুনিক চাকরিতেই ডিজিটাল দক্ষতা প্রয়োজন। কম্পিউটার জ্ঞান আপনার জীবনবৃত্তান্তকে আরও শক্তিশালী করে তোলে।"
    },
    {
        icon: '💻',
        title: "ডিজিটাল স্বাধীনতা",
        description: "নিজের ফাইল ম্যানেজ করা, অনলাইন পেমেন্ট করা বা সরকারি সেবার সুবিধা নেওয়ার জন্য প্রযুক্তিগত জ্ঞান থাকা আবশ্যক।"
    },
    {
        icon: '💰',
        title: "ফ্রিল্যান্সিং ও আয়",
        description: "ওয়েব ডেভেলপমেন্ট, গ্রাফিক্স ডিজাইন বা ডেটা এন্ট্রির মতো দক্ষতা অর্জন করে ঘরে বসেই আয় করার সুযোগ পান।"
    },
    {
        icon: '📈',
        title: "ব্যবসা পরিচালনায় দক্ষতা",
        description: "হিসাব রাখা, ডিজিটাল মার্কেটিং এবং ক্লায়েন্ট যোগাযোগের মতো ব্যবসায়িক কাজগুলো সহজে করার ক্ষমতা লাভ করেন।"
    },
    {
        icon: '🧠',
        title: "সমস্যা সমাধানের ক্ষমতা",
        description: "কম্পিউটার ও প্রোগ্রামিং শেখার প্রক্রিয়া আপনার যৌক্তিক চিন্তাভাবনা ও জটিল সমস্যা সমাধানের ক্ষমতাকে বাড়িয়ে তোলে।"
    },
    {
        icon: '🎓',
        title: "শিক্ষায় অগ্রগতি",
        description: "অনলাইন রিসোর্স ব্যবহার করে গবেষণা করা, অ্যাসাইনমেন্ট তৈরি করা এবং বিশ্বমানের শিক্ষা গ্রহণের সুযোগ মেলে।"
    },
];

export default function CourseView() {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* 🌟 প্রধান শিরোনাম */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4">
                        সফল ভবিষ্যতের জন্য কম্পিউটার শিক্ষার ৬টি সুবিধা
                    </h1>
                    <p className="text-xl text-gray-600">
                        আপনার জীবনকে পরিবর্তন করতে পারে যে মূল দক্ষতাগুলো।
                    </p>
                </div>

                {/* 🧱 কার্ড গ্রিড: প্রতি রো তে ৩টি কার্ড (lg:grid-cols-3) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            // Hover এবং border শৈলী যোগ করা হয়েছে
                            className="p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition duration-300 h-full flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <CardTitle className="text-xl font-bold mb-3 text-gray-800">
                                    {benefit.title}
                                </CardTitle>
                                <CardContent className="p-0 text-gray-600 text-base">
                                    {benefit.description}
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* 👇 বাটন সেকশন */}
                <div className="text-center mt-10">
                    <Button
                    asChild                        className="px-8 py-5 text-lg font-semibold rounded-full bg-green-600 text-white hover:bg-green-700 transition duration-300 shadow-lg"
                    >
                        <Link href={"/courses"}>
                            আমাদের কোর্সগুলো দেখুন
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
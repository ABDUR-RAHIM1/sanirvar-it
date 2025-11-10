"use client"
import React from 'react';
import AdmissionForm from '@/components/AdmissionForm';



export default function Admission() {


    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
                    আমাদের কোর্সে ভর্তি প্রক্রিয়া
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* 📚 বাম কলাম: ভর্তির তথ্য */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit static md:sticky top-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                            ভর্তি নির্দেশিকা ও নিয়মাবলী
                        </h2>
                        {/* ... পূর্বের ভর্তি নির্দেশিকা ... */}
                        <ul className="space-y-4 text-gray-700 list-disc ml-5">
                            <li>
                                <span className="font-semibold text-blue-600">অনলাইন আবেদন:</span> প্রথমে ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন এবং সাবমিট করুন।
                            </li>
                            <li>
                                <span className="font-semibold text-blue-600">ডাইনামিক তথ্য:</span> শিক্ষাগত তথ্যের জন্য প্রয়োজনে একাধিক সেকশন যুক্ত করুন।
                            </li>
                            <li>
                                <span className="font-semibold text-blue-600">প্রয়োজনীয় কাগজপত্র:</span> আপনার শেষ পরীক্ষার মার্কশিট ও জাতীয় পরিচয়পত্রের কপি স্ক্যান করে আপলোড করুন।
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <p className="text-sm font-medium text-yellow-800">
                                ⚠️ দ্রষ্টব্য: ফর্মের সকল তথ্য অবশ্যই বাংলায় পূরণ করতে হবে।
                            </p>
                        </div>
                    </div>

                    {/* 📝 ডান কলাম: ভর্তি ফর্ম */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-blue-600 mb-6">ভর্তি ফর্ম পূরণ করুন</h2>

                        <AdmissionForm
                            authorName={"student"}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
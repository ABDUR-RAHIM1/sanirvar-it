import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function StudentProfile() {
    const student = {
        name: "আল আমিন ইসলাম",
        roll: "2025101",
        class: "B.Sc in Computer Science",
        year: "3rd Year",
        section: "A",
        email: "alamin@example.com",
        phone: "+880 1712-345678",
        address: "রংপুর, বাংলাদেশ",
        dob: "12 March 2002",
        bloodGroup: "O+",
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-start">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
                {/* Header */}
                <div className=" flex items-center justify-between flex-wrap">
                    <div className="flex items-center gap-6 border-b pb-4">
                        <Image
                            width={100}
                            height={100}
                            src="https://i.pravatar.cc/120"
                            alt="student"
                            className="w-28 h-28 rounded-full border-4 border-blue-500"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{student.name}</h1>
                            <p className="text-gray-600">{student.class}</p>
                            <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                Roll: {student.roll}
                            </span>
                        </div>
                    </div>
                    <div>
                        <Button className={" w-[250px] rounded-full bg-blue-500 text-blue-50 cursor-pointer"}>
                            প্রোফাইল  আপডেট করুন
                        </Button>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Year</p>
                        <h2 className="text-lg font-semibold">{student.year}</h2>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Section</p>
                        <h2 className="text-lg font-semibold">{student.section}</h2>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Email</p>
                        <h2 className="text-lg font-semibold">{student.email}</h2>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Phone</p>
                        <h2 className="text-lg font-semibold">{student.phone}</h2>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <h2 className="text-lg font-semibold">{student.dob}</h2>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Blood Group</p>
                        <h2 className="text-lg font-semibold">{student.bloodGroup}</h2>
                    </div>
                    <div className="col-span-2 bg-gray-50 p-4 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Address</p>
                        <h2 className="text-lg font-semibold">{student.address}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

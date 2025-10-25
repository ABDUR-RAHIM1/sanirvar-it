"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus } from 'lucide-react'; // আইকন ব্যবহারের জন্য 

// ডাইনামিক শিক্ষাগত তথ্যের জন্য ডিফল্ট সেকশন
const defaultEducation = {
    degree: '',
    board: '',
    roll: '',
    reg: '',
    passingYear: '',
    result: ''
};
export default function AdmissionForm({ handleSubmit }) {
    // 💡 শিক্ষাগত তথ্যের জন্য স্টেট
    const [educationInfo, setEducationInfo] = useState([defaultEducation]);

    // নতুন এডুকেশন সেকশন যোগ করার ফাংশন
    const handleAddEducation = () => {
        setEducationInfo([...educationInfo, defaultEducation]);
    };


    // এডুকেশন সেকশন রিমুভ করার ফাংশন
    const handleRemoveEducation = (index) => {
        const list = [...educationInfo];
        list.splice(index, 1);
        setEducationInfo(list);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8">

            {/* ১. কোর্সের তথ্য */}
            <h3 className="text-xl font-semibold border-b pb-2 text-gray-700">কোর্স এবং শিফটের তথ্য</h3>

            <div className="grid md:grid-cols-2 gap-4">
                {/* 1. কোর্সের নাম (এখন Select) */}
                <div className="space-y-2">
                    <Label htmlFor="courseName">কোর্সের নাম</Label>
                    <Select required>
                        <SelectTrigger id="courseName" className="w-full">
                            <SelectValue placeholder="কোর্স নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                            {/* 💡 ডামি কোর্সের তালিকা */}
                            <SelectItem value="web_dev">ওয়েব ডেভেলপমেন্ট (MERN Stack)</SelectItem>
                            <SelectItem value="graphics_design">প্রফেশনাল গ্রাফিক্স ডিজাইন</SelectItem>
                            <SelectItem value="office_management">অফিস ম্যানেজমেন্ট ও আউটসোর্সিং</SelectItem>
                            <SelectItem value="digital_marketing">ডিজিটাল মার্কেটিং কোর্স</SelectItem>
                            <SelectItem value="video_editing">ভিডিও এডিটিং ও মোশন গ্রাফিক্স</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* 2. পছন্দের শিফট (Select) */}
                <div className="space-y-2">
                    <Label htmlFor="shift">পছন্দের শিফট</Label>
                    <Select required>
                        <SelectTrigger id="shift" className="w-full">
                            <SelectValue placeholder="শিফট নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="morning">সকাল (Morning)</SelectItem>
                            <SelectItem value="day">বিকাল (Day)</SelectItem>
                            <SelectItem value="evening">সন্ধ্যা (Evening)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* ২. ব্যক্তিগত ও অভিভাবকের তথ্য (পূর্বের ফিল্ডগুলি এখানে থাকবে) */}
            <h3 className="text-xl font-semibold border-b pb-2 pt-4 text-gray-700">ব্যক্তিগত ও অভিভাবকের তথ্য</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* নাম, জন্ম তারিখ, ফোন, লিঙ্গ, ইমেইল, অভিভাবকের নাম, অভিভাবকের ফোন ইত্যাদি এখানে থাকবে */}
                <div className="space-y-2"><Label htmlFor="name">শিক্ষার্থীর নাম</Label><Input type="text" id="name" required /></div>
                <div className="space-y-2"><Label htmlFor="dob">জন্ম তারিখ</Label><Input type="date" id="dob" required /></div>
                <div className="space-y-2"><Label htmlFor="phone">মোবাইল নম্বর</Label><Input type="tel" id="phone" required /></div>
                <div className="space-y-2 w-full"><Label htmlFor="gender">লিঙ্গ</Label>
                    <Select required className="w-full"><SelectTrigger id="gender"><SelectValue placeholder="নির্বাচন করুন" /></SelectTrigger><SelectContent><SelectItem value="male">পুরুষ</SelectItem><SelectItem value="female">মহিলা</SelectItem></SelectContent></Select>
                </div>
                <div className="space-y-2"><Label htmlFor="guardianName">অভিভাবকের নাম</Label><Input type="text" id="guardianName" required /></div>
                <div className="space-y-2"><Label htmlFor="guardianPhone">অভিভাবকের ফোন</Label><Input type="tel" id="guardianPhone" required /></div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="address">বর্তমান ঠিকানা</Label>
                <Textarea id="address" required />
            </div>

            {/* ৩. শিক্ষাগত তথ্যের ডাইনামিক সেকশন */}
            <h3 className="text-xl font-semibold border-b pb-2 pt-4 text-gray-700">শিক্ষাগত তথ্যাদি</h3>

            {educationInfo.map((education, index) => (
                <div key={index} className="border p-4 rounded-lg bg-gray-50 relative">
                    <h4 className="text-lg font-medium mb-3 text-blue-700">শিক্ষাগত যোগ্যতা {index + 1}</h4>

                    {/* রিমুভ বাটন */}
                    {educationInfo.length > 1 && (
                        <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            onClick={() => handleRemoveEducation(index)}
                            className="absolute top-2 right-2 h-8 w-8"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2"><Label htmlFor={`degree-${index}`}>ডিগ্রি/পরীক্ষার নাম</Label><Input type="text" id={`degree-${index}`} placeholder="যেমন: S.S.C/H.S.C" required /></div>
                        <div className="space-y-2"><Label htmlFor={`board-${index}`}>বোর্ড/বিশ্ববিদ্যালয়</Label><Input type="text" id={`board-${index}`} placeholder="যেমন: ঢাকা বোর্ড" required /></div>
                        <div className="space-y-2"><Label htmlFor={`roll-${index}`}>রোল নম্বর</Label><Input type="text" id={`roll-${index}`} required /></div>
                        <div className="space-y-2"><Label htmlFor={`reg-${index}`}>রেজিস্ট্রেশন নম্বর</Label><Input type="text" id={`reg-${index}`} /></div>
                        <div className="space-y-2"><Label htmlFor={`passYear-${index}`}>পাশের সন</Label><Input type="number" id={`passYear-${index}`} required /></div>
                        <div className="space-y-2"><Label htmlFor={`result-${index}`}>ফলাফল (GPA/শ্রেণী)</Label><Input type="text" id={`result-${index}`} required /></div>
                    </div>
                </div>
            ))}

            {/* একাধিক সেকশন যোগ করার বাটন */}
            <Button
                type="button"
                variant="outline"
                onClick={handleAddEducation}
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
            >
                <Plus className="mr-2 h-4 w-4" /> আরও শিক্ষাগত তথ্য যোগ করুন
            </Button>


            {/* ৪. ছবি আপলোড */}
            <h3 className="text-xl font-semibold border-b pb-2 pt-4 text-gray-700">ছবি এবং কাগজপত্র</h3>
            <div className="space-y-2">
                <Label htmlFor="photo">আপনার সাম্প্রতিক ছবি (ফটোর ফাইল)</Label>
                <Input type="file" id="photo" required />
                <p className="text-xs text-gray-500">সর্বোচ্চ ২ মেগাবাইট, JPG/PNG ফরম্যাট।</p>
            </div>


            {/* সাবমিট বাটন */}
            <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-semibold transition mt-8"
            >
                ভর্তি ফরম জমা দিন
            </Button>
        </form>)
}

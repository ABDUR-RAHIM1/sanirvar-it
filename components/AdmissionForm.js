"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus } from 'lucide-react'; // আইকন ব্যবহারের জন্য 
import InputField from '@/helpers/InputField';
import SelectFiled from '@/helpers/SelectFiled';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';


export default function AdmissionForm({ handleSubmit }) {
    // 💡 শিক্ষাগত তথ্যের জন্য স্টেট
    const [defaultEducation, setDefaultEducation] = useState({
        degree: '',
        board: '',
        roll: '',
        reg: '',
        passingYear: '',
        result: ''

    })
    //  multile education (as array)
    const [educationInfo, setEducationInfo] = useState([]);


    const [formData, setFormData] = useState({
        studentName: "",
        fatherName: "",
        motherName: "",
        dob: "",
        nidOrBirth: "",
        religion: "",
        gender: "",
        bloodGroup: "",
        mobileNo: "",
        guradianMobileNo: "",
        email: "",
        vill: "",
        post: "",
        upozila: "",
        dist: "",
        education: educationInfo,
        photo: ""
    })
    console.log(formData)
    const handleAddEducation = () => {
        setEducationInfo([...educationInfo, defaultEducation]);
    };


    // এডুকেশন সেকশন রিমুভ করার ফাংশন
    const handleRemoveEducation = (index) => {
        const list = [...educationInfo];
        list.splice(index, 1);
        setEducationInfo(list);
    };


    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setDefaultEducation((prev) => ({
            ...prev,
            [name]: value
        }))
    };


    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
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


                <InputField
                    label={"শিক্ষার্থীর নাম"}
                    name={"studentName"}
                    value={formData.studentName}
                    handleChange={handleChange}
                    placeholder={"নিজের নাম লিখো"}
                />

                <InputField
                    type='date'
                    label={"জন্ম তারিখ"}
                    name={"dob"}
                    value={formData.dob}
                    handleChange={handleChange}
                    placeholder={"জন্ম তারিখ"}
                />
                <InputField
                    label={" পিতার নাম"}
                    name={"fatherName"}
                    value={formData.fatherName}
                    handleChange={handleChange}
                    placeholder={"পিতার নাম"}
                />
                <InputField
                    label={"মাতার নাম"}
                    name={"motherName"}
                    value={formData.motherName}
                    handleChange={handleChange}
                    placeholder={"মাতার নাম"}
                />

                <SelectFiled
                    label={"লিঙ্গ"}
                    name={"gender"}
                    options={["পুরুষ", "মহিলা", "অন্যান্য"]}
                    handleChange={handleChange}
                    value={formData.gender}
                />
                <SelectFiled
                    label={"রক্তের গ্রুপ"}
                    name={"bloodGroup"}
                    options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                    handleChange={handleChange}
                    value={formData.bloodGroup}
                />

                <InputField
                    type='number'
                    label={"মোবাইল নাম্বার (শিক্ষার্থী)"}
                    name={"mobileNo"}
                    value={formData.mobileNo}
                    handleChange={handleChange}
                    placeholder={"শিক্ষার্থীর মোবাইল নং"}
                />
                <InputField
                    type='number'
                    label={"মোবাইল নাম্বার (অভিভাবক)"}
                    name={"guardianMobileNo"}
                    value={formData.guardianMobileNo}
                    handleChange={handleChange}
                    placeholder={"অভিভাবকের মোবাইল নং"}
                />


            </div>

            <h3 className="text-xl font-semibold border-b pb-2 pt-4 text-gray-700">স্থায়ী ঠিকানাঃ </h3>
            <div className="space-y-2 grid grid-cols-2 gap-2">

                <InputField
                    label={"গ্রাম"}
                    name={"vill"}
                    value={formData.vill}
                    handleChange={handleChange}
                    placeholder={"গ্রামের নাম"}
                />

                <InputField
                    label={"পোষ্ট অফিস"}
                    name={"post"}
                    value={formData.post}
                    handleChange={handleChange}
                    placeholder={"পোস্ট অফিসের নাম"}
                />

                <InputField
                    label={"উপজেলা"}
                    name={"upozila"}
                    value={formData.upozila}
                    handleChange={handleChange}
                    placeholder={"উপজেলার নাম"}
                />
                <InputField
                    label={"জেলা"}
                    name={"dist"}
                    value={formData.dist}
                    handleChange={handleChange}
                    placeholder={"জেলার নাম"}
                />

            </div>

            {/* ৩. শিক্ষাগত তথ্যের ডাইনামিক সেকশন */}
            <h3 className="text-xl font-semibold border-b pb-2 pt-4 text-gray-700">শিক্ষাগত তথ্যাদি</h3>


            <div className="space-y-6">
                <div
                    className="border p-4 rounded-lg bg-gray-50 relative"
                >


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <InputField
                            label={`ডিগ্রি/পরীক্ষার নাম`}
                            name="degree"
                            value={defaultEducation.degree}
                            handleChange={handleEducationChange}
                            placeholder="যেমন: S.S.C/H.S.C"
                        />

                        <InputField
                            label={`বোর্ড/বিশ্ববিদ্যালয়`}
                            name="board"
                            value={defaultEducation.board}
                            handleChange={handleEducationChange}
                            placeholder="যেমন: ঢাকা বোর্ড"
                        />

                        <InputField
                            label={`রোল নম্বর`}
                            name="roll"
                            value={defaultEducation.roll}
                            handleChange={handleEducationChange}
                            placeholder="বোর্ড পরীক্ষার রোল"
                        />

                        <InputField
                            label={`রেজিস্ট্রেশন নম্বর`}
                            type="number"
                            name="reg"
                            value={defaultEducation.reg}
                            handleChange={handleEducationChange}
                            placeholder="রেজিস্ট্রেশন নং"
                        />

                        <InputField
                            label={`পাশের সন`}
                            type="number"
                            name="passingYear"
                            value={defaultEducation.passingYear}
                            handleChange={handleEducationChange}
                            placeholder="কত সালে পাশ করেছেন"
                        />

                        <InputField
                            label={`ফলাফল (GPA/শ্রেণী)`}
                            name="result"
                            value={defaultEducation.result}
                            handleChange={handleEducationChange}
                            placeholder="রেজাল্ট"
                        />
                    </div>

                    {/* একাধিক সেকশন যোগ করার বাটন */}
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddEducation}
                        className="w-full my-3 border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                        <Plus className="mr-2 h-4 w-4" /> আরও শিক্ষাগত তথ্য যোগ করুন
                    </Button>
                </div>

                {educationInfo.length > 0 && (
                    <Table className="mt-4 border">
                        <TableHeader>
                            <TableRow>
                                <TableHead>ডিগ্রি / পরিক্ষার নাম</TableHead>
                                <TableHead>বোর্ড</TableHead>
                                <TableHead>রোল</TableHead>
                                <TableHead>রেজিস্ট্রেশন</TableHead>
                                <TableHead>পাসের বছর</TableHead>
                                <TableHead>ফলাফল</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {educationInfo.map((ed, index) => (

                                <TableRow key={index}>
                                    <TableCell>{ed.degree}</TableCell>
                                    <TableCell>{ed.board}</TableCell>
                                    <TableCell>{ed.roll}</TableCell>
                                    <TableCell>{ed.reg}</TableCell>
                                    <TableCell>{ed.passingYear}</TableCell>
                                    <TableCell>{ed.result}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}




            </div>




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
        </form >)
}

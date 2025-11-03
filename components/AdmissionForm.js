"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react'; // আইকন ব্যবহারের জন্য 
import InputField from '@/helpers/InputField';
import SelectFiled from '@/helpers/SelectFiled';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { batchList, bloodGroups, genders, registresionStatus, religions } from '@/localDatabase/addStudentData';
import { getAllSchedule } from '@/fetch/schedule';
import { formatTime12Hour } from '@/helpers/formatTime';
import { getAllCourse } from '@/fetch/courses';
import Image from 'next/image';


export default function AdmissionForm({ handleSubmit }) {
    const [courses, setCourses] = useState([])
    const [schedule, setSchedule] = useState([])
    const [imagePreview, setImagePreview] = useState(null)
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

        schedule: "",
        batch: "",
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


    //  get course & schedule from database
    useEffect(() => {
        const getData = async () => {
            try {
                const { status: courseStatus, data: courseData } = await getAllCourse();
                const { status, data } = await getAllSchedule();


                // courseData
                if (courseStatus === 200 && courseData) {
                    // setSchedule(data)
                    const formatedData = courseData.map((cd) => ({
                        name: cd.title,
                        name: cd.title,
                    }));

                    setCourses(formatedData)
                }

                // schedule Data
                if (status === 200 && data) {
                    // setSchedule(data)
                    const formatedData = data.map((d) => ({
                        name: d.scheduleName + " (" + formatTime12Hour(d.startTime) + "-" + formatTime12Hour(d.endTime) + ")",
                        value: d.scheduleName + " (" + formatTime12Hour(d.startTime) + "-" + formatTime12Hour(d.endTime) + ")",
                    }));

                    setSchedule(formatedData)
                }
            } catch (error) {
                console.log(error)
            }
        };
        getData()
    }, [])

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
        if (type === "file") {
          
            const imageObject = URL.createObjectURL(files[0])
            setImagePreview(imageObject)
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
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

                    <SelectFiled
                        label={"courseName"}
                        name={"courseName"}
                        options={courses || []}
                        defaultOption={"Select a Course"}
                        value={formData.courseName}
                        handleChange={handleChange}
                    />
                </div>

                {/* 2. পছন্দের শিফট (Select) */}
                <div className="space-y-2">
                    <SelectFiled
                        label={"schedule"}
                        name={"schedule"}
                        options={schedule || []}
                        defaultOption={"Select a Schedule"}
                        value={formData.schedule}
                        handleChange={handleChange}
                    />
                </div>
                <div className='w-full' >

                    <SelectFiled
                        label={`batch ${new Date().getFullYear()}`}
                        name={"batch"}
                        options={batchList}
                        defaultOption={`Select a batch -  ${new Date().getFullYear()}`}
                        value={formData.batch}
                        handleChange={handleChange}
                    />
                </div>
                <div className='w-full' >

                    <SelectFiled
                        label={"Registration"}
                        name={"registrationStatus"}
                        options={registresionStatus}
                        defaultOption={"Select Registration Status"}
                        value={formData.registrationStatus}
                        handleChange={handleChange}
                    />
                </div>

                <InputField
                    type='number'
                    label={"Course Fee"}
                    name={"regularCourseFee"}
                    value={formData.regularCourseFee}
                    handleChange={handleChange}
                    placeholder={"Regular Course Fee"}
                />
                <InputField
                    type='number'
                    label={"Offer Fee"}
                    name={"offerCourseFee"}
                    value={formData.offerCourseFee}
                    handleChange={handleChange}
                    placeholder={"Offer Course Fee"}
                />
            </div>

            {/* ২. ব্যক্তিগত ও অভিভাবকের তথ্য (পূর্বের ফিল্ডগুলি এখানে থাকবে) */}
            <h3 className="text-xl font-semibold border-b pb-2 pt-4 text-gray-700">ব্যক্তিগত ও অভিভাবকের তথ্য</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                <InputField
                    label={"শিক্ষার্থীর নাম"}
                    name={"studentName"}
                    value={formData.studentName}
                    handleChange={handleChange}
                    placeholder={"Write Your good name"}
                />

                <InputField
                    type='date'
                    label={"জন্ম তারিখ"}
                    name={"dob"}
                    value={formData.dob}
                    handleChange={handleChange}
                    placeholder={"Date of birth"}
                />
                <InputField
                    label={" পিতার নাম"}
                    name={"fatherName"}
                    value={formData.fatherName}
                    handleChange={handleChange}
                    placeholder={"Father's Name"}
                />
                <InputField
                    label={"মাতার নাম"}
                    name={"motherName"}
                    value={formData.motherName}
                    handleChange={handleChange}
                    placeholder={"Mother's Name"}
                />

                <SelectFiled
                    label={"লিঙ্গ"}
                    name={"gender"}
                    options={genders}
                    handleChange={handleChange}
                    value={formData.gender}
                />
                <SelectFiled
                    label={"রক্তের গ্রুপ"}
                    name={"bloodGroup"}
                    options={bloodGroups}
                    handleChange={handleChange}
                    value={formData.bloodGroup}
                />
                <SelectFiled
                    label={"Religion"}
                    name={"religion"}
                    options={religions}
                    handleChange={handleChange}
                    value={formData.religion}
                />
                <InputField
                    type='email'
                    label={"Email"}
                    name={"mobileNo"}
                    value={formData.email}
                    handleChange={handleChange}
                    placeholder={"Student Email (optional)"}
                    required={false}
                />
                <InputField
                    type='number'
                    label={"মোবাইল নাম্বার (শিক্ষার্থী)"}
                    name={"mobileNo"}
                    value={formData.mobileNo}
                    handleChange={handleChange}
                    placeholder={"Student Phone Number"}
                />
                <InputField
                    type='number'
                    label={"মোবাইল নাম্বার (অভিভাবক)"}
                    name={"guardianMobileNo"}
                    value={formData.guardianMobileNo}
                    handleChange={handleChange}
                    placeholder={"Gurdian Phone Number"}
                />


            </div>

            <h3 className="text-xl font-semibold border-b pb-2 pt-4 text-gray-700">স্থায়ী ঠিকানাঃ </h3>
            <div className="space-y-2 grid grid-cols-2 gap-2">

                <InputField
                    label={"গ্রাম"}
                    name={"vill"}
                    value={formData.vill}
                    handleChange={handleChange}
                    placeholder={"Village Name"}
                />

                <InputField
                    label={"পোষ্ট অফিস"}
                    name={"post"}
                    value={formData.post}
                    handleChange={handleChange}
                    placeholder={"Post Office Name"}
                />

                <InputField
                    label={"উপজেলা"}
                    name={"upozila"}
                    value={formData.upozila}
                    handleChange={handleChange}
                    placeholder={"Upozila Name"}
                />
                <InputField
                    label={"জেলা"}
                    name={"dist"}
                    value={formData.dist}
                    handleChange={handleChange}
                    placeholder={"District Name"}
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
            <div className=" space-y-2 grid grid-cols-2 gap-2">
                <div>
                    <Label htmlFor="photo">আপনার সাম্প্রতিক ছবি (ফটোর ফাইল)</Label>
                    <Input type="file" id="photo" name={"photo"}
                    onChange={handleChange}
                    required />
                    <p className="text-xs my-2 text-gray-500">
                        এই ফটো রেজিস্ট্রেশনের সময় ব্যবহার হবে
                    </p>
                </div>
                <div className='py-4 flex items-center justify-center'>
                    <div className=' border rounded-md min-w-[200px] min-h-[200px] w-[200px] h-[200px]'>
                        {
                            imagePreview !== null &&
                            <Image
                                alt='sanirvor Computer Institute'
                                src={imagePreview}
                                width={200}
                                height={200}
                                className='w-full h-full'
                            />
                        }
                    </div>
                </div>
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

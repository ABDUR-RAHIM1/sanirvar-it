"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from '../components/SubmitButton'
import { courseActions, courseCreateGet } from '@/constans/Endpoints'
import { postAction } from '@/actions/postAction'
import { globalContext } from '@/ContextApi/ContextApi'
import { useRouter } from 'next/navigation'
import InputField from '@/helpers/InputField'
import TextareaField from '@/helpers/TextareaField'
import { IsEditMoodHelper } from '@/helpers/IsEditMood'
import { uploaderStyle } from '@/helpers/UploadStyle'

export default function AddCourse() {
    const router = useRouter();
    const { showToast, editData, uploader, uploadResponse, imgUrl } = useContext(globalContext)
    const [loading, setLoading] = useState(false);

    const isEditMood = IsEditMoodHelper(editData);
    const { status, message } = uploadResponse;
    const costomStyle = uploaderStyle(status);

    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        duration: '',
        price: '',
        trainer: "Nahid Arman Roni",
        banner: null,
    })

    //  set Edited Data in Previous State
    useEffect(() => {
        if (editData) {
            setCourseData(editData)
        }
    }, [editData])

    const handleChange = (e) => {
        const { name, value, type, files } = e.target

        if (type === "file") {
            uploader(files[0])
        } else {
            setCourseData(prev => ({ ...prev, [name]: value }))
        }

    };

    //  set Image Url In the State
    useEffect(() => {
        setCourseData((prev) => ({
            ...prev,
            banner: imgUrl
        }))
    }, [imgUrl])

    console.log(imgUrl, courseData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {

            const payload = {
                method: isEditMood ? "PUT" : "POST",
                endPoint: isEditMood ? courseActions + courseData._id : courseCreateGet,
                body: courseData
            };

            const { status, data } = await postAction(payload);
            showToast(status, data)
            router.refresh();

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">{
                isEditMood ? "কোর্স আপডেট করুন" : "নতুন কোর্স যোগ করুন"
            }</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">

                <InputField
                    label={"কোর্সের নাম"}
                    name={"title"}
                    value={courseData.title}
                    handleChange={handleChange}
                    placeholder="কোর্সের নাম লিখুন"
                />

                <TextareaField
                    label={"বিবরণ"}
                    name={"description"}
                    value={courseData.description}
                    handleChange={handleChange}
                    placeholder="কোর্সের সংক্ষিপ্ত বিবরণ লিখুন (,)"
                />

                <InputField
                    label={"সময়কাল"}
                    name="duration"
                    value={courseData.duration}
                    handleChange={handleChange}
                    placeholder="উদাহরণ: 3 মাস"
                />


                <InputField
                    label={"মূল্য"}
                    type="number"
                    name="price"
                    value={courseData.price}
                    handleChange={handleChange}
                    placeholder="মূল্য লিখুন (BDT)"
                />


                <InputField
                    label={"ট্রেইনার"}
                    name="trainer"
                    value={courseData.trainer}
                    handleChange={handleChange}
                    placeholder="ট্রেইনারের নাম লিখুন"
                />
                <div className=' my-3'>
                    <InputField
                        type='file'
                        label={"কভার ফটো"}
                        name="banner"
                        handleChange={handleChange}
                    />
                    <small style={costomStyle}>
                        {
                            message || null
                        }
                    </small>
                </div>

                <SubmitButton
                    text={
                        isEditMood ? "কোর্স আপডেট করুন" : "'কোর্স যুক্ত করুন'"
                    }
                    loading={loading}
                />
            </form>
        </div>
    )
}

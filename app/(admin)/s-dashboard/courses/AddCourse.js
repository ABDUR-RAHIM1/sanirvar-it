"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function AddCourse() {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        duration: '',
        price: '',
        trainer: "Nahid Arman Roni" 
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCourseData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(courseData)
        // এখানে API call করে course save করা যাবে
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">নতুন কোর্স যোগ করুন</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <div>
                    <Label htmlFor="title">কোর্সের নাম</Label>
                    <Input
                        id="title"
                        name="title"
                        value={courseData.title}
                        onChange={handleChange}
                        placeholder="কোর্সের নাম লিখুন"
                    />
                </div>

                <div>
                    <Label htmlFor="description">বিবরণ</Label>
                    <Input
                        id="description"
                        name="description"
                        value={courseData.description}
                        onChange={handleChange}
                        placeholder="কোর্সের সংক্ষিপ্ত বিবরণ লিখুন"
                    />
                </div>

                <div>
                    <Label htmlFor="duration">সময়কাল</Label>
                    <Input
                        id="duration"
                        name="duration"
                        value={courseData.duration}
                        onChange={handleChange}
                        placeholder="উদাহরণ: 3 মাস"
                    />
                </div>

                <div>
                    <Label htmlFor="price">মূল্য</Label>
                    <Input
                        id="price"
                        name="price"
                        value={courseData.price}
                        onChange={handleChange}
                        placeholder="মূল্য লিখুন (BDT)"
                        type="number"
                    />
                </div>

                <div>
                    <Label htmlFor="trainer">ত্রেইনার</Label>
                    <Input
                        id="trainer"
                        name="trainer"
                        value={courseData.trainer}
                        onChange={handleChange}
                        placeholder="ট্রেইনারের নাম লিখুন"
                        type="text"
                    />
                </div>

                <Button type="submit" className="mt-4">কোর্স যোগ করুন</Button>
            </form>
        </div>
    )
}

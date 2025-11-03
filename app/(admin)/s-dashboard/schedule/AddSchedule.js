"use client"

import React, { useContext, useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { globalContext } from "@/ContextApi/ContextApi"
import { postAction } from "@/actions/postAction"
import { scheduleActions, scheduleCreateGet } from "@/constans/Endpoints"
import SelectFiled from "@/helpers/SelectFiled"
import InputField from "@/helpers/InputField"
import Spinner from "@/helpers/Spinner"
import { IsEditMoodHelper } from "@/helpers/IsEditMood"
import { useRouter } from "next/navigation"

export default function AddSchedule() {
  const router = useRouter();
  const { showToast, editData } = useContext(globalContext);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    scheduleName: "",
    startTime: "",
    endTime: ""
  });

  const isEdit = IsEditMoodHelper(editData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  //  set editable Data in the state
  useEffect(() => {
    if (isEdit) {
      setFormData(editData)
    }
  }, [editData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {

      const payload = {
        method: isEdit ? "PUT" : "POST",
        endPoint: isEdit ? scheduleActions + formData._id : scheduleCreateGet,
        body: formData
      };

      const { status, data } = await postAction(payload);
      showToast(status, data)
      router.refresh()
    } catch (error) {
      console.log(error)
      showToast(500, "Failed to add Schedule")
    } finally {
      setLoading(false)
    }

  }



  const sheduleList = [
    {
      name: "সকাল",
      value: "সকাল"
    },
    {
      name: "বিকাল",
      value: "বিকাল"
    },
    {
      name: "রাত",
      value: "রাত"
    },
  ]


  return (
    <div className="max-w-3xl mx-auto mt-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-indigo-600">
            {
              isEdit ?
                "শিফট আপডেট করুন"
                : "🕒 শিফট অনুযায়ী ট্রেনিং সিডিউল যুক্ত করুন"
            }
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Shift Selector */}


            <SelectFiled
              name={"scheduleName"}
              label={"শিফট"}
              defaultOption={"শিফট নির্বাচন করুন"}
              options={sheduleList}
              value={formData.scheduleName}
              handleChange={handleChange}
            />



            {/* Time Inputs */}
            <div className="grid grid-cols-2 gap-4">

              <InputField
                type="time"
                label={"শুরু সময়"}
                name={"startTime"}
                value={formData.startTime}
                placeholder={""}
                handleChange={handleChange}
              />

              <InputField
                type="time"
                label={"শেষ সময়"}
                name={"endTime"}
                value={formData.endTime}
                placeholder={""}
                handleChange={handleChange}

              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6"
              >
                {
                  loading ? <Spinner /> : isEdit ? "Update Schedule" : "Add Schedule"
                }
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>



    </div>
  )
}

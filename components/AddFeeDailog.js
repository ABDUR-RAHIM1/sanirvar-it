"use client"
import React, { useContext, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import TextareaField from '@/helpers/TextareaField'
import SelectField from '@/helpers/SelectField'
import InputField from '@/helpers/InputField'
import { postAction } from '@/actions/postAction'
import { globalContext } from '@/ContextApi/ContextApi'
import { Button } from './ui/button'
import { feesCreateGet } from '@/constans/Endpoints'
export default function AddFeeDailog() {

    const { showToast } = useContext(globalContext)
    const [loading, setLoading] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState({
        paidAmount: 0,
        method: "",
        note: "",
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const payload = {
                mothod: "POST",
                endPoint: feesCreateGet,
                body: paymentInfo
            }

            const { status, data } = await postAction(payload);
            showToast(status, data)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>

            <Dialog>
                <DialogTrigger>
                    <div className=' font-bold text-lg bg-blue-500 text-white px-2 cursor-pointer hover:bg-blue-600 transition-all'>
                        +
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>

                            পেমেন্ট যুক্ত করুন

                        </DialogTitle>
                        <DialogDescription>
                            <div>

                                <div className=' mt-5 grid grid-cols-2 gap-3'>
                                    <InputField
                                        type='number'
                                        label={"Amount"}
                                        name={"paidAmount"}
                                        value={paymentInfo.paidAmount}
                                        handleChange={handleChange}
                                        placeholder={"Enter Paid Amount"}
                                        required={false}
                                    />
                                    <SelectField
                                        label={"Payment Method"}
                                        name={"method"}
                                        value={paymentInfo.method}
                                        handleChange={handleChange}
                                        defaultOption={"Select Payment Method"}
                                        options={[
                                            { name: "Bkash", value: "Bkash" },
                                            { name: "Rocket", value: "Rocket" },
                                            { name: "Nagad", value: "Nagad" },
                                            { name: "By Hand", value: "By Hand" },
                                            { name: "Others", value: "Others" },
                                        ]}
                                        required={false}
                                    />
                                    <div className=' mt-3 col-span-2'>
                                        <TextareaField
                                            label={"Note"}
                                            name={"note"}
                                            value={paymentInfo.note}
                                            handleChange={handleChange}
                                            placeholder={"Write About The Payemnt (optional)"}
                                            required={false}
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    type={"submit"}
                                    className={" w-full bg-blue-500 text-white my-5 rounded-full"}
                                >
                                   {
                                    loading ? "Please Wait" : "Add Fee "
                                   }
                                </Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>

    )
}

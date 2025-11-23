import { getAllPaymentInfo } from '@/fetch/payment'
import NotFound from '@/helpers/NotFound';
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { formatTime12Hour } from '@/helpers/formatTime';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PaymentSearch from './PaymentSearch';

export default async function PaymentHistory() {

    const { status, data } = await getAllPaymentInfo();

    if (status !== 200 || !data) {
        return <NotFound texty={"Payment Info not found!"} />
    }

    // console.log(data)
    return (
        <div className=' py-10'>
            <div className=' my-5 flex items-center justify-between flex-wrap '>
                <h2 className=' font-medium text-lg capitalize'>Payement List</h2>
                <PaymentSearch />
            </div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead >List</TableHead>
                        <TableHead className="w-[100px]">Student</TableHead>
                        <TableHead className="w-[100px]">Photo</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Note</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        data && data.length > 0 ?
                            data.map((fee, index) => (
                                <TableRow
                                    key={fee._id || index}>
                                    <TableCell
                                        className="font-medium">{index + 1}</TableCell>
                                    <TableCell
                                        className="font-medium">
                                        <div className='flex items-center justify-center gap-2 flex-col'>
                                            <p>{fee.student?.studentName}</p>
                                            <p>{fee.student?.studentRoll || "N/A"}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="font-medium">
                                        <Image
                                            src={fee.student?.photo}
                                            alt={"Sanirvor computer"}
                                            width={50}
                                            height={50}
                                            className=' w-[50px] h-[70px] rounded-md'
                                        />
                                    </TableCell>
                                    <TableCell
                                        className="font-medium">{fee.paidAmount}</TableCell>
                                    <TableCell
                                        className="font-medium">{fee.method}</TableCell>
                                    <TableCell className="font-medium">{fee.note}</TableCell>
                                    <TableCell className=" bg-blue-50 text-blue-500">
                                        {new Date(fee.date).toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            ))
                            : <div>
                                not found
                            </div>
                    }


                </TableBody>
            </Table>
        </div>
    )
}

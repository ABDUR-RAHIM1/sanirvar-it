import React from 'react'
import Link from "next/link"
import { AddResult } from './AddResult'
import { getAllResults } from '@/fetch/results'
import NotFound from '@/helpers/NotFound'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { EyeIcon, Pencil, Trash2 } from "lucide-react"
import Image from 'next/image'

export default async function ViewResult() {
    const { status, data: results } = await getAllResults()

    if (status !== 200 || !results?.length) {
        return <NotFound text="Result not found!" />
    }

    return (
        <div className="space-y-6">

            {/* ================= Header ================= */}
            <div className="w-full p-4 bg-gradient-to-r to-blue-100 from-green-200
                            flex items-center justify-between flex-wrap">
                <h3 className="text-2xl font-medium italic">
                    নতুন রেজাল্ট তৈরি করুন
                </h3>
                <AddResult />
            </div>

            {/* ================= Result Table ================= */}
            <div className="border rounded-lg overflow-hidden">
                <Table>

                    <TableHeader>
                        <TableRow>
                            <TableHead>Result Type</TableHead>
                            <TableHead>Photo</TableHead>
                            <TableHead>Student</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Obtained</TableHead>
                            <TableHead>%</TableHead>
                            <TableHead>Grade</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {results.map((result) => (
                            <React.Fragment key={result._id}>

                                {/* ===== Main Row ===== */}
                                <TableRow>
                                    <TableCell className="capitalize">
                                        {result.resultType}
                                    </TableCell>
                                    <TableCell>
                                        <Image
                                            src={result.student?.photo}
                                            width={50}
                                            height={50}
                                            alt='Sanirvor computer training center'
                                            className=' rounded-md'
                                        />
                                    </TableCell>
                                    <TableCell className="capitalize flex flex-col gap-2">
                                        <p>  {result.student?.studentName || "N/A"}</p>
                                        <p>  {result.student?.studentRoll || "N/A"}</p>
                                    </TableCell>

                                    <TableCell>{result.totalMark}</TableCell>
                                    <TableCell>{result.totalObtained}</TableCell>
                                    <TableCell>{result.percentage}%</TableCell>

                                    <TableCell>
                                        <span className={`px-2 py-1 rounded text-sm
                                            ${result.grade === "A+" && "bg-green-200"}
                                            ${result.grade === "A" && "bg-blue-200"}
                                            ${result.grade === "A-" && "bg-yellow-200"}
                                            ${result.grade === "F" && "bg-red-200"}
                                        `}>
                                            {result.grade}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <span className={`font-semibold
                                            ${result.status === "PASS"
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}>
                                            {result.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <Button asChild className={"bg-blue-500"}>
                                            <Link href={`/s-dashboard/viewResult/${result._id}`}>
                                                <EyeIcon size={10} />
                                            </Link>
                                        </Button>
                                    </TableCell>

                                    {/* ===== Actions (NO handler) ===== */}
                                    <TableCell className="text-right space-x-2">
                                        <Link href={`/admin/results/edit/${result._id}`}>
                                            <Button size="sm" variant="outline">
                                                <Pencil size={16} />
                                            </Button>
                                        </Link>

                                        <Link href={`/admin/results/delete/${result._id}`}>
                                            <Button size="sm" variant="destructive">
                                                <Trash2 size={16} />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>

                                {/* ===== Subject Details ===== */}
                                {/* <TableRow>
                                    <TableCell colSpan={7} className="bg-muted/50">
                                        <div className="p-4 space-y-3">
                                            <h4 className="font-semibold">
                                                Subject Wise Result
                                            </h4>

                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Subject</TableHead>
                                                        <TableHead>Full Mark</TableHead>
                                                        <TableHead>Obtained</TableHead>
                                                        <TableHead>%</TableHead>
                                                        <TableHead>Grade</TableHead>
                                                        <TableHead>Status</TableHead>
                                                    </TableRow>
                                                </TableHeader>

                                                <TableBody>
                                                    {result.subjectWiseResults.map((sub, i) => (
                                                        <TableRow key={i}>
                                                            <TableCell className="capitalize">
                                                                {sub.subjectName}
                                                            </TableCell>
                                                            <TableCell>{sub.fullMark}</TableCell>
                                                            <TableCell>{sub.obtainedMark}</TableCell>
                                                            <TableCell>{sub.percentage}%</TableCell>
                                                            <TableCell>{sub.grade}</TableCell>
                                                            <TableCell>
                                                                <span className={`font-semibold
                                                                    ${sub.status === "PASS"
                                                                        ? "text-green-600"
                                                                        : "text-red-600"
                                                                    }`}>
                                                                    {sub.status}
                                                                </span>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </TableCell>
                                </TableRow> */}

                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

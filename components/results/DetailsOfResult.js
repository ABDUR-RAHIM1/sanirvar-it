 
import React from 'react'
import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { formatDateBD } from '@/helpers/formatDate'
import DownloadResultButton from '@/components/results/DownloadResult'

export default async function DetailsOfResult({ status, result }) {

    if (status !== 200 || !result) {
        return <div className="p-10 text-center">Result not found</div>
    }

    const { student } = result

    return (
        <div id="result-sheet" className="max-w-5xl mx-auto p-8 bg-white border">

            {/* ================= Header ================= */}
            <div className="flex justify-between items-center border-b pb-2">
                <h2 className="font-bold text-lg">BTEB</h2>
                <h2 className="font-bold text-lg">Sanirvor Computer Training Center</h2>
            </div>

            {/* ================= Title ================= */}
            <h1 className="text-center text-xl font-bold my-6 underline">
                RESULT SHEET
            </h1>

            {/* ================= Student Info & Grade Demo ================= */}
            <div className="grid grid-cols-[70%_28%] gap-6 items-start">

                {/* ===== Student Info ===== */}
                <div className="flex items-start gap-4 text-sm">
                    <Image
                        src={student.photo}
                        width={150}
                        height={110}
                        alt={student.studentName}
                        className="border rounded-md"
                    />

                    <div className="space-y-1">
                        <p><strong>Name:</strong> {student.studentName}</p>
                        <p><strong>Roll:</strong> {student.studentRoll}</p>
                        <p><strong>Father Name:</strong> {student?.fatherName || "N/A"}</p>
                        <p><strong>Mother Name:</strong> {student?.motherName || "N/A"}</p>
                        <p><strong>Date Of Birth:</strong> {formatDateBD(student?.dob) || "N/A"}</p>
                        <hr />
                        <p><strong>Result Type:</strong> {result.resultType}</p>
                        <p><strong>Trade:</strong> {student?.course?.title || "N/A"}</p>
                        <p><strong>Status:</strong> {result.status}</p>
                        <p><strong>Grade:</strong> {result.grade}</p>



                    </div>
                </div>

                {/* ===== Grade Demo ===== */}
                <div>
                    <Table className="text-sm">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Percentage</TableHead>
                                <TableHead>Grade</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>80% – 100%</TableCell>
                                <TableCell>A+</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>70% – 79%</TableCell>
                                <TableCell>A</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>60% – 69%</TableCell>
                                <TableCell>A-</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Below 60%</TableCell>
                                <TableCell>F</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* ================= Curriculum ================= */}
            <div className="mt-6 text-sm">
                <p><strong>Curriculum:</strong> {result.curriculum}</p>
            </div>

            {/* ================= Total Result ================= */}
            <div className="mt-6 border p-4 grid grid-cols-4 text-center text-sm">
                <div>
                    <p className="font-semibold">Total Mark</p>
                    <p>{result.totalMark}</p>
                </div>
                <div>
                    <p className="font-semibold">Obtained</p>
                    <p>{result.totalObtained}</p>
                </div>
                <div>
                    <p className="font-semibold">Percentage</p>
                    <p>{result.percentage}%</p>
                </div>
                <div>
                    <p className="font-semibold">Final Grade</p>
                    <p>{result.grade}</p>
                </div>
            </div>

            {/* ================= Subject Wise Result ================= */}
            <div className="mt-8">
                <h3 className="font-semibold mb-2">Subject Wise Result</h3>

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
                        {[...result.subjectWiseResults]
                            .sort((a, b) => {
                                if (a.subjectName.toLowerCase() === "writing") return -1;
                                if (b.subjectName.toLowerCase() === "writing") return 1;
                                return 0;
                            })
                            .map((sub, i) => (
                                <TableRow key={i}>
                                    <TableCell className="capitalize">
                                        {sub.subjectName}
                                    </TableCell>
                                    <TableCell>{sub.fullMark}</TableCell>
                                    <TableCell>{sub.obtainedMark}</TableCell>
                                    <TableCell>{sub.percentage}%</TableCell>
                                    <TableCell>{sub.grade}</TableCell>
                                    <TableCell
                                        className={
                                            sub.status === "PASS"
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }
                                    >
                                        {sub.status}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>

                </Table>
            </div>

            <div className={" bg-gray-100 p-4 rounded-md flex items-center justify-center"}>
                <DownloadResultButton
                    elementId="result-sheet"
                />
            </div>
        </div>
    )
}

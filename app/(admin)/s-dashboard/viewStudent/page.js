import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from 'next/image';
import { demoStudents } from '@/localDatabase/dummyStudents';
import MoreButton from './MoreButton';
import DeleteButton from '@/Buttons/DeleteButton';
import EditButton from '@/Buttons/EditButton';
import { getAllStudents } from '@/fetch/students';
import RegistrationStatus from './RegistrationStatus';
import { studentActions } from '@/constans/Endpoints';
import AddFeeDailog from '@/components/AddFeeDailog';

export default async function ViewStudent() {

    const { status, data } = await getAllStudents();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Student List</h2>

            {
                status === 200 && data && data.length > 0 ?
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Photo</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Course</TableHead>
                                <TableHead>Paid</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {data.map((student, index) => (
                                <TableRow key={student._id || index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className={" relative"}>

                                        <Image
                                            width={100}
                                            height={100}
                                            src={student.photo}
                                            alt={student.studentName || "sanirvor computer training center"}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div className=' bg-blue-100 text-blue-500 py-0 px-[2px] rounded-full absolute bottom-[6px] -left-[3px] text-sm pt-1 w-[25px] h-[25px] flex items-center justify-center'>
                                            {
                                                student.registerBy === "student" ? "S" : "M"
                                            }
                                        </div>

                                    </TableCell>
                                    <TableCell>
                                        <div className=' flex flex-col gap-2'>
                                            <p>{student.studentName}</p>
                                            <p>{student.fatherName}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell>{student.mobileNo}</TableCell>
                                    <TableCell className="w-[120px] break-words">
                                        <div className="flex flex-col gap-1 w-full">
                                            <p>C. <span>{student.course?.title || "N/A"}</span></p>
                                            <p>P. <span>{student.course?.price || "N/A"}</span></p>
                                            <p>D. <span>{student.course?.duration || "N/A"}</span></p>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center flex-wrap gap-2 justify-between w-[80px] bg-blue-100 p-2 rounded-md '>
                                            <div>
                                                {Array.isArray(student.paidFee) && student.paidFee.length > 0 ? (() => {
                                                    const totalValue = student.paidFee.reduce((sum, val) => sum + Number(val), 0);
                                                    const coursePrice = Number(student.course?.price || 0);

                                                    // রঙ নির্ধারণ
                                                    let colorClass = "text-blue-500"; // default
                                                    if (totalValue > coursePrice) colorClass = "text-red-500";
                                                    else if (totalValue < coursePrice) colorClass = "text-yellow-500";
                                                    else if (totalValue === coursePrice) colorClass = "text-green-500";

                                                    return (
                                                        <div className={`font-medium ${colorClass}`}>
                                                            <span>{totalValue}</span>
                                                        </div>
                                                    );
                                                })() : (
                                                    <span>0</span>
                                                )}
                                            </div>
                                            <AddFeeDailog />

                                        </div>
                                    </TableCell>



                                    <TableCell >
                                        <RegistrationStatus
                                            student={student}
                                        />
                                    </TableCell>



                                    <TableCell className="flex gap-2">
                                        <MoreButton
                                            studentData={student}
                                        />
                                        <EditButton
                                            data={student}
                                            path={"/s-dashboard/courses"}
                                        />
                                        <DeleteButton
                                            deleteRoute={studentActions + student._id}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}

                            {demoStudents.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                                        No students found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    : <div>
                        student not found!
                    </div>
            }

        </div>
    );
}
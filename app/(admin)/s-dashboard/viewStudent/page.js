import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";
import Image from 'next/image';
import { demoStudents } from '@/localDatabase/dummyStudents';
import MoreButton from './MoreButton';
import DeleteButton from '@/Buttons/DeleteButton';
import EditButton from '@/Buttons/EditButton';

export default async function ViewStudent() {


    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Student List</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {demoStudents.map((student, index) => (
                        <TableRow key={student.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                <Image
                                    width={100}
                                    height={100}
                                    src={student.photo}
                                    alt={student.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.phone}</TableCell>
                            <TableCell>{student.gender}</TableCell>
                            <TableCell>
                                <span
                                    className={`px-2 py-1 rounded-full text-white text-xs ${student.paymentStatus === "Paid" ? "bg-green-500" : "bg-red-500"
                                        }`}
                                >
                                    {student.paymentStatus}
                                </span>
                            </TableCell>
                            <TableCell className="flex gap-2">
                                <MoreButton
                                    studentId={student.id}
                                />
                                <EditButton
                                    data={student}
                                    path={"/s-dashboard/courses"}
                                />
                                <DeleteButton
                                    deleteRoute={""}
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
        </div>
    );
}
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Delete, Edit } from 'lucide-react';

export default function ViewCourses({ courses }) {
    return (
        <div className="p-6 space-y-10">

            {/* ডেটা টেবিল */}
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-700">
                        Course List (Demo)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>Demo Courses for the Training Center</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Course Name</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Trainer</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {courses.map((course) => (
                                <TableRow key={course.id}>
                                    <TableCell>{course.id}</TableCell>
                                    <TableCell>{course.name}</TableCell>
                                    <TableCell>{course.duration}</TableCell>
                                    <TableCell>{course.price}</TableCell>
                                    <TableCell>{course.trainer}</TableCell>
                                    <TableCell>
                                        <button className=' cursor-pointer text-blue-500 bg-blue-100'>
                                            <Edit />
                                        </button>
                                    </TableCell>
                                    <TableCell>
                                        <button className=' cursor-pointer text-red-500 bg-red-100'>
                                            <Delete />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

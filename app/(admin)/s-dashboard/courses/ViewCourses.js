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
import EditButton from '@/Buttons/EditButton';
import DeleteButton from '@/Buttons/DeleteButton';
import { courseActions } from '@/constans/Endpoints';

export default function ViewCourses({ courses }) {

    

    return (
        <div className="p-6 space-y-10">

            {/* ডেটা টেবিল */}
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-700">
                        Course List
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>All Courses for the Training Center</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Course Name</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Trainer</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {courses.map((course, index) => (
                                <TableRow key={course._id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{course.title}</TableCell>
                                    <TableCell>{course.duration}</TableCell>
                                    <TableCell>{course.price}</TableCell>
                                    <TableCell>{course.trainer}</TableCell>
                                    <TableCell className={"flex items-center gap-2"}>
                                        <EditButton
                                            data={course}
                                            route={"/s-dashboard/courses"}
                                        />
                                        <DeleteButton
                                            deleteRoute={courseActions + course._id}
                                        />
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

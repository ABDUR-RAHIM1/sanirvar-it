import { getAllSchedule } from '@/fetch/schedule'
import NotFound from '@/helpers/NotFound';
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { formatTime12Hour } from '@/helpers/formatTime';
import EditButton from '@/Buttons/EditButton';
import DeleteButton from '@/Buttons/DeleteButton';
import { scheduleActions } from '@/constans/Endpoints';

export default async function ViewSchedule() {
    const { status, data } = await getAllSchedule();

    if (status !== 200) {
        return <NotFound text={"Schedule not found!"} />
    }
    return (
        <div className=' mx-5'>
            {data && data.length > 0 && (
                <Card className="mt-6 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg text-gray-800">📋 সিডিউল তালিকা</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>শিফট</TableHead>
                                    <TableHead>শুরু সময়</TableHead>
                                    <TableHead>শেষ সময়</TableHead>
                                    <TableHead>আকশন</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow key={item._id}>
                                        <TableCell>
                                            {item.scheduleName}

                                        </TableCell>
                                        <TableCell>{formatTime12Hour(item.startTime)}</TableCell>
                                        <TableCell>{formatTime12Hour(item.endTime)}</TableCell>
                                        <TableCell className={"flex items-center gap-3"}>
                                            <EditButton
                                                data={item}
                                                route={"/s-dashboard/schedule"}
                                            />
                                            <DeleteButton
                                                deleteRoute={scheduleActions + item._id}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

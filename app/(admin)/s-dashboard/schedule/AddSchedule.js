"use client"

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AddSchedule() {
  const [shift, setShift] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [schedules, setSchedules] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!shift || !startTime || !endTime) {
      alert("⚠️ সব ফিল্ড পূরণ করুন!")
      return
    }

    const newSchedule = { id: Date.now(), shift, startTime, endTime }
    setSchedules((prev) => [...prev, newSchedule])

    // reset fields
    setShift("")
    setStartTime("")
    setEndTime("")
  }

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-indigo-600">
            🕒 শিফট অনুযায়ী ট্রেনিং সিডিউল যুক্ত করুন
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Shift Selector */}
            <div>
              <label className="text-sm font-medium text-gray-700">শিফট নির্বাচন করুন</label>
              <Select value={shift} onValueChange={(v) => setShift(v)}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="শিফট বাছাই করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="সকাল">🌤️ সকাল</SelectItem>
                  <SelectItem value="বিকাল">🌇 বিকাল</SelectItem>
                  <SelectItem value="রাত">🌙 রাত</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Time Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">শুরু সময়</label>
                <Input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">শেষ সময়</label>
                <Input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6"
              >
                Add Schedule
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Schedule Table */}
      {schedules.length > 0 && (
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.shift}</TableCell>
                    <TableCell>{item.startTime}</TableCell>
                    <TableCell>{item.endTime}</TableCell>
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

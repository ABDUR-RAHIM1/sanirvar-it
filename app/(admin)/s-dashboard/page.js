import React from 'react'

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-md">
      <h1 className="text-2xl font-bold mb-6">অ্যাডমিন ড্যাশবোর্ড</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
          <h2 className="text-gray-500 text-sm">মোট শিক্ষার্থী</h2>
          <p className="text-2xl font-semibold mt-1">120</p>
        </div>

        {/* Total Courses */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
          <h2 className="text-gray-500 text-sm">মোট কোর্স</h2>
          <p className="text-2xl font-semibold mt-1">8</p>
        </div>

        {/* Active Trainers */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
          <h2 className="text-gray-500 text-sm">সক্রিয় ট্রেইনার</h2>
          <p className="text-2xl font-semibold mt-1">5</p>
        </div>

        {/* Upcoming Batches */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
          <h2 className="text-gray-500 text-sm">আসন্ন ব্যাচ</h2>
          <p className="text-2xl font-semibold mt-1">3</p>
        </div>
      </div>

    
    </div>
  )
}
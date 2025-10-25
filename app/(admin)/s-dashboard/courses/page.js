import React from 'react'
import AddCourse from './AddCourse'
import ViewCourses from './ViewCourses';

export default async function Courses() {

    // ডেমো কোর্স ডেটা
    const courses = [
        {
            id: 1,
            name: "Web Development Bootcamp",
            duration: "6 Months",
            price: "৳12,000",
            trainer: "Rakib Hasan",
        },
        {
            id: 2,
            name: "Graphic Design Masterclass",
            duration: "3 Months",
            price: "৳8,000",
            trainer: "Nusrat Jahan",
        },
        {
            id: 3,
            name: "Microsoft Office Professional",
            duration: "2 Months",
            price: "৳5,000",
            trainer: "Shamim Reza",
        },
        {
            id: 4,
            name: "Digital Marketing Advanced",
            duration: "4 Months",
            price: "৳10,000",
            trainer: "Mahbub Alam",
        },
        {
            id: 5,
            name: "Computer Hardware & Networking",
            duration: "5 Months",
            price: "৳9,000",
            trainer: "Sonia Akter",
        },
    ];

    return (
        <div className='pageStyle'>
            <AddCourse />
            <ViewCourses courses={courses} />
        </div>
    )
}

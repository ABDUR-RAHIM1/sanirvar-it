import React from 'react'
import Courses from '../components/CourseCard'
import { getAllCourse } from '@/fetch/courses'
import NotFound from '@/helpers/NotFound';
import CourseCard from '../components/CourseCard';

export default async function AllCourses() {

    const { status, data } = await getAllCourse();
 

    if (status !== 200) {
        return <NotFound text={"Course Not found!"} />
    }

    return (
        <div className=' py-10 px-4'>
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
                আমাদের কোর্সসমূহ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    data && data?.length > 0 ?
                        data.map((course) => (
                            <CourseCard
                                key={course._id}
                                course={course}
                            />
                        ))
                        :
                        <NotFound text={"Course Not found"} />
                }

            </div>
        </div>
    )
}

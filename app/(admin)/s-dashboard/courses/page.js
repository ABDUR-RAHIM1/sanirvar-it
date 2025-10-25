import React from 'react'
import AddCourse from './AddCourse'
import ViewCourses from './ViewCourses';
import { getAllCourse } from '@/fetch/courses';
import NotFound from '@/helpers/NotFound';

export default async function Courses() {

    const { status, data } = await getAllCourse();


    return (
        <div className='pageStyle'>
            <AddCourse />
            {
                (status !== 200 || !data) ? <NotFound text={"Course Not found!"} /> :
                    <ViewCourses courses={data} />
            }
        </div>
    )
}

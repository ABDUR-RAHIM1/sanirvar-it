
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/localDatabase/CoursesData";
import Image from "next/image";

export default function Courses() {
  return (
    <section id="courses" className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        আমাদের কোর্সসমূহ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition">
            <CardHeader className={"px-3"}>
              <CardTitle className={"bg-blue-100 text-blue-500 p-2 rounded-md"}>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className={"px-3"}>
              <Image
                width={200}
                height={200}
                src={course.image}
                alt={course.title}
                className="rounded-lg mb-4 w-full h-[200px]"
              />
              <p className="text-gray-600">{course.desc}</p>
            </CardContent>
            <CardFooter className={"px-3"}>
              <Button className={" rounded-full bg-blue-500 text-blue-50 cursor-pointer"}>
                জয়েন করুন
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

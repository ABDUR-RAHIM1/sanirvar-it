import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CourseCard({ course }) {
    
    const hasImage = course.photo && typeof course.photo === 'string';

    // 💡 ডেসক্রিপশন রেন্ডারিং লজিক
    const items = course.description 
        ? course.description.split(',').map(item => item.trim())
        : [];
    const itemsToShow = items.slice(0, 4);
    const hasMoreItems = items.length > 4; 

    return (
        <Card className="hover:shadow-lg transition flex flex-col gap-0">
            
            {/* 1. CardHeader: px-3 ও pb-2 দিয়ে টপ ও বটম স্পেস কমানো হলো */}
            <CardHeader className={"px-3 pb-2"}> 
                <CardTitle className={"bg-blue-100 text-blue-600 text-lg font-semibold p-2 rounded-md"}>
                    {course.title}
                </CardTitle>
            </CardHeader>

            {/* 2. CardContent: pt-2 দিয়ে টপ স্পেস কমানো হলো */}
            <CardContent className={"px-3 pt-2 flex-grow"}>

                {/* 🖼️ ইমেজ/ডিফল্ট ডিভ: mb-3 দিয়ে নিচের মার্জিন কমানো হলো */}
                {hasImage ? (
                    <Image
                        width={400} 
                        height={200}
                        src={course.photo} 
                        alt={course.title}
                        className="rounded-lg mb-3 w-full h-[200px] object-cover" 
                    />
                ) : (
                    <div className="rounded-lg mb-3 w-full h-[200px] bg-gray-200 flex items-center justify-center text-center p-4">
                        <p className="text-gray-700 font-bold text-lg">
                            স্বনির্ভর কম্পিউটার ট্রেনিং ইন্সটিটিউট
                        </p>
                    </div>
                )}

                {/* 📝 ডেসক্রিপশন/ফিচার লিস্ট: mt-3 দিয়ে উপরের মার্জিন কমানো হলো */}
                <ul className='list-disc ml-4 text-left text-gray-700 space-y-1 mt-3 mb-3 min-h-[100px]'> 
                    {itemsToShow.length > 0 ? (
                        itemsToShow.map((d, i) => (
                            <li key={i} className="text-sm">
                                {d}
                            </li>
                        ))
                    ) : (
                        <p className="text-sm text-center text-gray-500 italic">
                            এই কোর্সের কোনো বিবরণ বা মূল ফিচার দেওয়া হয়নি।
                        </p>
                    )}
                    
                    {hasMoreItems && (
                        <li className="text-sm font-bold text-blue-500">
                            ... আরও ফিচার রয়েছে
                        </li>
                    )}
                </ul>

                {/* 💰 মূল্য এবং সময়কাল: pt-2 mt-2 দিয়ে স্পেস ঠিক রাখা হলো */}
                <div className="flex justify-between items-center text-sm font-medium border-t pt-2 my-2">
                    <p className="text-gray-600">
                        সময়কাল: <span className="text-indigo-600 font-semibold">{course.duration || "অজানা"}</span>
                    </p>
                    <p className="text-xl font-bold text-green-600">
                        {course.price ? `৳ ${course.price}` : "যোগাযোগ করুন"}
                    </p>
                </div>

            </CardContent>

            {/* 3. CardFooter: pb-3 pt-0 দিয়ে স্পেস কমানো হলো */}
            <CardFooter className={"px-3 pt-0"}> 
                <Button
                    className={"w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"}
                >
                    জয়েন করুন
                </Button>
            </CardFooter>
        </Card>
    )
}
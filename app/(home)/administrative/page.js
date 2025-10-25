import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle2 } from "lucide-react";

const people = {
    founder: {
        name: "Md. Arman Rony",
        title: "Founder & CEO",
        img: "https://i.ibb.co/7QdB3Tm/profile.png",
    },
    chairman: {
        name: "Md. Saiful Islam",
        title: "Chairman",
        img: "https://i.ibb.co/7QdB3Tm/profile.png",
    },
    teachers: [
        {
            name: "Sharmin Akter",
            title: "Computer Trainer",
            img: "https://i.ibb.co/7QdB3Tm/profile.png",
        },
        {
            name: "Rakib Hasan",
            title: "Graphics Design Trainer",
            img: "https://i.ibb.co/7QdB3Tm/profile.png",
        },
    ],
    developer: {
        name: "Abdur Rahim",
        title: "Mern Stack Web Developer",
        img: "https://i.ibb.co/7QdB3Tm/profile.png",
    },
};

export default function Administrative() {
    return (
        <div className="px-6 py-10 space-y-12">
            {/* Founder Section */}
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-6">Founder</h2>
                <Card className="mx-auto max-w-sm shadow-xl rounded-2xl">
                    <CardContent className="p-6 flex flex-col items-center">
                        {people.founder.img ? (
                            <img
                                src={people.founder.img}
                                alt={people.founder.name}
                                className="w-24 h-24 rounded-full mb-4 shadow"
                            />
                        ) : (
                            <UserCircle2 className="w-24 h-24 mb-4" />
                        )}
                        <h3 className="text-xl font-semibold">{people.founder.name}</h3>
                        <p className="text-gray-500">{people.founder.title}</p>
                    </CardContent>
                </Card>
            </section>

            {/* Chairman Section */}
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-6">Chairman</h2>
                <Card className="mx-auto max-w-sm shadow-xl rounded-2xl">
                    <CardContent className="p-6 flex flex-col items-center">
                        {people.chairman.img ? (
                            <img
                                src={people.chairman.img}
                                alt={people.chairman.name}
                                className="w-24 h-24 rounded-full mb-4 shadow"
                            />
                        ) : (
                            <UserCircle2 className="w-24 h-24 mb-4" />
                        )}
                        <h3 className="text-xl font-semibold">{people.chairman.name}</h3>
                        <p className="text-gray-500">{people.chairman.title}</p>
                    </CardContent>
                </Card>
            </section>

            {/* Teachers Section */}
            <section>
                <h2 className="text-2xl font-bold text-center mb-6">Teachers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {people.teachers.map((teacher, index) => (
                        <Card key={index} className="shadow-lg rounded-2xl">
                            <CardContent className="p-6 flex flex-col items-center">
                                {teacher.img ? (
                                    <img
                                        src={teacher.img}
                                        alt={teacher.name}
                                        className="w-20 h-20 rounded-full mb-4 shadow"
                                    />
                                ) : (
                                    <UserCircle2 className="w-20 h-20 mb-4" />
                                )}
                                <h3 className="text-lg font-semibold">{teacher.name}</h3>
                                <p className="text-gray-500">{teacher.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Developer Section */}
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-6">Developer</h2>
                <Card className="mx-auto max-w-sm shadow-xl rounded-2xl">
                    <CardContent className="p-6 flex flex-col items-center">
                        {people.developer.img ? (
                            <img
                                src={people.developer.img}
                                alt={people.developer.name}
                                className="w-24 h-24 rounded-full mb-4 shadow"
                            />
                        ) : (
                            <UserCircle2 className="w-24 h-24 mb-4" />
                        )}
                        <h3 className="text-xl font-semibold">{people.developer.name}</h3>
                        <p className="text-gray-500">{people.developer.title}</p>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}

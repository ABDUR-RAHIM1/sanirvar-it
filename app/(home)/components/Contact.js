
"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      alert("কাজ চলতেছে!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id="contact" className=" my-10 py-20 bg-gradient-to-r from-blue-50 to-white">
      <h2 className=" text-2xl md:text-4xl font-extrabold text-blue-700 text-center mb-12">
        আমাদের সাথে যোগাযোগ করুন
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
          <h3 className="text-2xl font-semibold text-blue-600">ঠিকানা</h3>
          <p className="text-gray-700 leading-relaxed">
            স্বনির্ভর কম্পিউটার ইন্সটিটিউট <br />
            কলেজ রোড, লালমনিরহাট
          </p>
          <p className="text-gray-700 flex items-center gap-2">📞 017XXXXXXXX</p>
          <p className="text-gray-700 flex items-center gap-2">📧 info@swanirvor.com</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 space-y-6">
          <Input placeholder="আপনার নাম" className="border-blue-200 focus:ring-blue-400" />
          <Input type="email" placeholder="ইমেইল" className="border-blue-200 focus:ring-blue-400" />
          <Textarea placeholder="আপনার বার্তা" className="border-blue-200 focus:ring-blue-400" />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            পাঠান
          </Button>
        </form>
      </div>
    </section>
  );
}

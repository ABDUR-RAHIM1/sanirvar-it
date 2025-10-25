
import { Button } from "@/components/ui/button";

export default function AdmissionCTA() {
  return (
    <section
      id="admission"
      className="bg-indigo-700 text-white py-16 text-center rounded-bl-[100px] md:rounded-bl-full rounded-tr-[100px] md:rounded-tr-full  mx-5"
    >
      <h2 className="text-3xl font-bold mb-6">এখনই ভর্তি হোন</h2>
      <p className="mb-6 text-lg">সীমিত আসন, দ্রুত রেজিস্ট্রেশন করুন</p>
      <Button className="bg-white hover:bg-gray-200 text-black cursor-pointer">
        ভর্তি ফর্ম পূরণ করুন
      </Button>
    </section>
  );
}

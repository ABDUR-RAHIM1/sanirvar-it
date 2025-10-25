import React from "react";

export default function AboutUs() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                    আমাদের সম্পর্কে
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    আমরা একটি আধুনিক কম্পিউটার প্রশিক্ষণ কেন্দ্র, যেখানে শিক্ষার্থীদেরকে
                    সর্বাধুনিক প্রযুক্তি ও সফটওয়্যার ব্যবহারের মাধ্যমে দক্ষ জনশক্তি হিসেবে
                    গড়ে তোলা হয়। আমাদের লক্ষ্য শুধু কম্পিউটার শেখানো নয়, বরং
                    শিক্ষার্থীদেরকে বাস্তবমুখী কাজের অভিজ্ঞতা দেওয়া, যাতে তারা
                    চাকরি ও ফ্রিল্যান্সিং মার্কেটে আত্মবিশ্বাসের সাথে কাজ করতে পারে।
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
                        <h3 className="text-xl font-semibold text-blue-500 mb-4">
                            আধুনিক কোর্স
                        </h3>
                        <p className="text-gray-600">
                            ওয়েব ডিজাইন, গ্রাফিক্স ডিজাইন, প্রোগ্রামিং, অফিস অ্যাপ্লিকেশনসহ
                            নানান কোর্সের মাধ্যমে আমরা শিক্ষার্থীদেরকে সর্বশেষ প্রযুক্তির সাথে পরিচিত করাই।
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
                        <h3 className="text-xl font-semibold text-blue-500 mb-4">
                            দক্ষ প্রশিক্ষক
                        </h3>
                        <p className="text-gray-600">
                            অভিজ্ঞ প্রশিক্ষকবৃন্দ প্রতিটি শিক্ষার্থীকে হাতে-কলমে প্রশিক্ষণ দিয়ে
                            তাদের দক্ষতাকে বাস্তবমুখী কাজে রূপান্তর করেন।
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
                        <h3 className="text-xl font-semibold text-blue-500 mb-4">
                            ক্যারিয়ার গাইডলাইন
                        </h3>
                        <p className="text-gray-600">
                            শুধু প্রশিক্ষণ নয়, আমরা শিক্ষার্থীদেরকে ফ্রিল্যান্সিং, চাকরি ও উদ্যোক্তা
                            হওয়ার জন্য প্রয়োজনীয় ক্যারিয়ার পরামর্শ প্রদান করি।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

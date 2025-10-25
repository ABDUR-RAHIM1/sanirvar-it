 
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/localDatabase/TestimonialsData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">
        শিক্ষার্থীদের মতামত
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-6">
        {testimonials.map((review) => (
          <Card key={review.id} className="p-6">
            <CardContent>
              <p className="text-gray-700 italic mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-lg">{review.name}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

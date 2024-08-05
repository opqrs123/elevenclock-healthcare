// components/Testimonials.js
export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "John Doe", text: "Great company to work with!" },
    { id: 2, name: "Jane Smith", text: "Excellent products and service." }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">{testimonial.text}</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

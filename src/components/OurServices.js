// components/OurServices.js
export default function OurServices() {
  const services = [
    { id: 1, name: "Service 1", description: "Description 1" },
    { id: 2, name: "Service 2", description: "Description 2" },
    { id: 3, name: "Service 3", description: "Description 3" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

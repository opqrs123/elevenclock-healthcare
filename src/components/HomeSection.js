export default function HomeSection() {
  return (
    <section
      className="relative bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('./home_section.jpg')",
        height: "66.33vh" // This sets the height to 1/3 of the viewport height
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 md:mb-4">Welcome to Our Company</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-4 md:mb-6">Innovative solutions for a better future</p>
        <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-base">
          Learn More
        </button>
      </div>
    </section>
  );
}

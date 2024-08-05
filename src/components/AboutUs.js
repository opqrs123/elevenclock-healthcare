// components/AboutUs.js
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full items-center justify-center md:w-full mb-8 md:mb-0">
            <Image src="/about.jpg" width={500} height={500} alt="About Us" className="rounded-lg shadow-md" />
          </div>
          <div className=" w-full md:w-full md:pl-8">
            <p className="text-2xl mb-4">About Elevenclock Healthcare</p>
            <p className="text-md">
              Elevenclock healthcare, based in Ahmedabad, is a leading manufacturer, distributor, and supplier of superior-quality medical equipment and consumables. Our extensive product range
              includes Cardiology, Neurology, Nephrology, Surgical, and Medical equipment, which we supply globally. These products are in high demand among hospitals, private health clinics, and
              other healthcare facilities. Designed to enhance efficiency and improve work processes for medical practitioners, our products are a valuable asset
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

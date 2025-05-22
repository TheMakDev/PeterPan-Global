import { FaLightbulb, FaCogs, FaHeadset, FaCheckCircle } from "react-icons/fa";
import img1 from '../assets/trusted.jpeg';
import img2 from '../assets/about-2.jpeg';

export default function ITBusinessSection() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-12">

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { icon: <FaLightbulb className="text-2xl" />, title: "Innovative Solution", desc: "For Business" },
          { icon: <FaCogs className="text-2xl" />, title: "Tech-Oriented", desc: "Services" },
          { icon: <FaHeadset className="text-2xl" />, title: "Top Class Support", desc: "For Customers" },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
              {item.icon}
            </div>
            <p className="text-sm uppercase font-semibold text-gray-500">Features</p>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>


      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div className="relative w-full">
          <img
            src={img1}
            alt="Team"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          <img
            src={img2}
            alt="Team2"
            className="absolute bottom-4 left-4 w-2/5 sm:w-1/2 rounded-lg border-4 border-white shadow-lg"
          />
        </div>

        <div>
          <p className="text-sm text-blue-600 font-semibold uppercase">Clients Love What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
            We Provide Truly Trusted IT Business Solutions
          </h2>
          <p className="text-gray-500 mt-4">
            At PeterPan Global Services, we deliver truly trusted IT business solutions tailored for modern enterprises. Our focus on innovation, reliability, and growth ensures your business stays secure and competitive. Partner with us for scalable, future-ready technology that drives real success.
          </p>

          <div className="flex flex-wrap gap-6 mt-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold">
                68%
              </div>
              <p className="mt-2 text-sm font-bold">Business Strategy</p>
            </div>
            <div className="text-center ">
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold">
                93%
              </div>
              <p className="mt-2 text-sm font-bold">Real Technology Solutions</p>
            </div>
          </div>


          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Professional Team Member",
              "Awards Winning IT Solutions Company",
              "Dedicated Tech Services",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-blue-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
              Explore More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
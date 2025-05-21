import { FaLightbulb, FaCogs, FaHeadset, FaCheckCircle } from "react-icons/fa";

export default function ITBusinessSection() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-12">
      <div className="grid md:grid-cols-3 gap-6 text-center">
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

        <div className="relative">
          <img src="/path-to-image1.jpg" alt="Team" className="rounded-lg shadow-lg" />
          <img
            src="/path-to-image2.jpg"
            alt="Team2"
            className="absolute bottom-0 left-0 w-1/2 rounded-lg border-4 border-white shadow-lg transform translate-x-1/4 translate-y-1/4"
          />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/mnt/data/91687604-d17b-4305-9168-5f7ad3f10d14.png" alt="Best Award" className="w-24" />
          </div>
        </div>


        <div>
          <p className="text-sm text-blue-600 font-semibold uppercase">5M+ Trusted Our Clients</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
            We Prominent Truly Trusted IT Business Solutions
          </h2>
          <p className="text-gray-500 mt-4">
            Transmds is the world’s driving worldwide coordinations supplier — we uphold industry and exchange
            the worldwide trade of merchandi
          </p>

          <div className="flex items-center gap-8 mt-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold">
                68%
              </div>
              <p className="mt-2 text-sm">Business Strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold">
                93%
              </div>
              <p className="mt-2 text-sm">Real Technology Solutions</p>
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

          <div className="mt-6 flex items-center justify-between">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Explore More About Us
            </button>
            <div className="flex items-center gap-2">
              <img src="/path-to-founder.jpg" alt="Founder" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-signature text-sm">Mehedii .H</p>
                <p className="text-xs text-gray-500">Ceo & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import blog1 from "../assets/blog.jpg";
import blog2 from "../assets/blog.jpg";

const blogs = [
  {
    id: 1,
    title: "From Newbie To Ninja: 10 Essential IT Skills You Need",
    category: "UI/UX Designing",
    image: blog1,
    alt: "Person working on UI/UX design",
    link: "#",
  },
  {
    id: 2,
    title: "A Complete Guide To Business Insurance Perfect",
    category: "UI/UX Designing",
    image: blog2,
    alt: "Business insurance concept image",
    link: "#",
  },
];

export default function BlogSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50 px-6 md:px-12"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Trusted News & Blogs
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
            Read Our News & Blogs
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 text-base md:text-lg">
            Stay updated with the latest insights and stories from our expert team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogs.map(({ id, title, category, image, alt, link }) => (
            <article
              key={id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-2xl"
              tabIndex={0}
              aria-label={`${title} blog post`}
              data-aos="zoom-in-up"
            >
              <img
                src={image}
                alt={alt}
                className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-8">
                <p className="text-xs text-blue-600 uppercase tracking-wider font-semibold mb-3">
                  {category}
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 leading-tight mb-6">
                  {title}
                </h3>
                <a
                  href={link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

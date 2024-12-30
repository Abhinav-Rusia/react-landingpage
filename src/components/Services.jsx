import React from 'react';
import clock from "../assets/clock.png";
import browsing from "../assets/browsing.png";
import rocket from "../assets/rocket.png";

const servicesData = [
  {
    id: 1,
    image: clock,
    title: "Real logo, Real fast",
    description:
      "From concept to reality in no time. Logos that make an impact.",
  },
  {
    id: 2,
    image: browsing,
    title: "Do it yourself",
    description:
      "Take control of your brand's identity—create your perfect logo effortlessly and on your terms.",
  },
  {
    id: 3,
    image: rocket,
    title: "Get website-ready logos",
    description:
      "Design logos that look stunning on any website—quick, easy, and tailored for your brand.",
  },
];

const Services = () => {
  return (
    <div className="container py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <img className="w-20 h-20" src={service.image} alt={service.title} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from "react";

const Services = (props) => {
  return (
    <div id="services" className="container py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {props.servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                className="w-20 h-20"
                src={service.image}
                alt={service.title}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 pt-5">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

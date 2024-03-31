import React from 'react';
import NavHead from './Navbar';

const services = [
  {
    title: 'Leakage',
    description: 'We build modern, responsive websites that are tailored to your specific needs.',
    icon: 'fa-solid fa-code',
  },
  {
    title: 'Drainage',
    description: 'Create a user-friendly mobile app that helps you connect with your audience.',
    icon: 'fa-solid fa-mobile',
  },
  {
    title: 'Clogged',
    description: 'Improve your website\'s ranking and reach a wider audience through search engines.',
    icon: 'fa-solid fa-search',
  },
  {
    title: 'Quick Services',
    description: 'Improve your website\'s ranking and reach a wider audience through search engines.',
    icon: 'fa-solid fa-search',
  },
  {
    title: 'Quick Services',
    description: 'Improve your website\'s ranking and reach a wider audience through search engines.',
    icon: 'fa-solid fa-search',
  },
  {
    title: 'Quick Services',
    description: 'Improve your website\'s ranking and reach a wider audience through search engines.',
    icon: 'fa-solid fa-search',
  },
  
 
];

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card bg-green-200 p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:border-spacing-2 hover:shadow-[0px_9px_21px_5px_#c6f6d5]  transition duration-300 mb-6 py-14
    ">
      <i className={`${service.icon} text-3xl text-green-700`}></i>
      <h3 className="text-xl font-medium mt-4 mb-2">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <>
    <NavHead/>
    <section className="services px-4 py-16 text-center bg-gradient-to-r  h-screen">
        
      <h2 className="text-3xl font-bold mb-12 text-cyan-50 -mt-11">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 text-gray-700">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
    </>
  );
};

export default Services;
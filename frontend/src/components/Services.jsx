import React from 'react';
import NavHead from './Navbar';
import { FaServicestack} from "react-icons/fa";
import { GiArtificialIntelligence, GiMedicines, GiHealthPotion, GiHealthCapsule, GiHealthIncrease } from "react-icons/gi";
import { GiMedicinePills } from "react-icons/gi";
const services = [
  {
    title: 'Health Monitoring',
    description: 'Utilize wearable devices and AI algorithms to monitor vital signs, track health metrics, and provide real-time alerts for potential health issues.',
    icon: <GiHealthPotion />,
  },
  {
    title: 'Diagnostic Imaging Analysis',
    description: 'AI-powered analysis of medical imaging data (such as X-rays, MRIs, CT scans) for accurate diagnosis and detection of abnormalities',
    icon: <GiMedicines />,
  },
  {
    title: 'Predictive Analytics',
    description: 'AI algorithms analyze patient data to predict disease progression, identify high-risk individuals, and recommend preventive interventions.',
    icon: <GiArtificialIntelligence />,
  },
  {
    title: 'Remote Patient Monitoring',
    description: 'Continuous monitoring of patient health data remotely using AI-enabled devices, allowing early detection of health issues and proactive intervention.',
    icon: <GiHealthIncrease />,
  },
  {
    title: 'Quick Services',
    description: 'Improve your website\'s ranking and reach a wider audience through search engines.',
    icon: <GiHealthCapsule />,
  },
  {
    title: 'Virtual Health Assistants',
    description: 'AI-driven virtual assistants provide personalized health guidance, medication management, and lifestyle recommendations through natural language interaction.',
    icon: <GiMedicinePills />,
  },

];

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card bg-teal-800 p-8 rounded-lg shadow-md  hover:scale-105 hover:border-spacing-2 hover:shadow-[0px_9px_21px_5px_#c6f6d5]  transition duration-300 mb-6 py-14">
      <div className="text-3xl text-gray-100 ml-36 lg:ml-44
      ">{service.icon}</div>
      <h3 className="text-xl text-gray-50 font-medium mt-4 mb-2">{service.title}</h3>
      <p className="text-gray-200">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <NavHead/>
      <section className="services px-4 py-16 text-center bg-gradient-to-r  h-screen">
        <h2 className="text-3xl font-bold mb-12 text-white -mt-11">OUR SERVICES</h2>
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

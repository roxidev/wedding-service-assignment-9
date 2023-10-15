import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Planner from '../Planner/Planner';
import Vanue from '../Vanue/Vanue';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { weddingServices } = useLoaderData();
  console.log(weddingServices);
  return (
    <div>
      <Navbar />
      <Hero />
      <h2 className="text-3xl text-center font-extrabold mt-20 mb-20">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weddingServices.map((service) => (
          <Services key={service.id} service={service} />
        ))}
      </div>

      <Vanue />
      <Planner />
      <Footer />
    </div>
  );
};

export default Home;

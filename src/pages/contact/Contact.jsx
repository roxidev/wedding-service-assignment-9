import React from 'react';
import contact from '../../assets/helpLine.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-4xl text-center font-semibold mb-20">
        Our Emmergency Contact Service
      </h2>

      <img className="h-screen w-full" src={contact} alt="" />
      <Footer />
    </div>
  );
};

export default Contact;

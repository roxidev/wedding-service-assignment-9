import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl font-bold my-10 text-center">
          {' '}
          Our Service Details
        </h2>

        <ul className="text-xl text-center ">
          <li>1. Elegant Wedding Venue service</li>
          <li>2. Full-Service Wedding Planning-</li>
          <li>3. Wedding Photography Package</li>
          <li>4. Catering and Banquet Service--</li>
          <li>5. Floral Decoration Package-----</li>
          <li>6. Live Band Entertainment-------</li>
        </ul>
        <Footer />
        <p>{id}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;

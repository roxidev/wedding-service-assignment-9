import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
  console.log(service?.id);
  // const { name, price, description } = service;

  return (
    <div className="card  bg-[pink] shadow-xl mb-20 ">
      <figure className="px-10 pt-10">
        <img src={service?.image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service?.name}</h2>
        <p>{service?.price}</p>
        {service?.description.length > 50 ? (
          <p>
            {service?.description.slice(0, 50)}{' '}
            <Link
              to={`/services/${service?.id}`}
              className="text-pink-600 font-semibold"
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p>{service?.description}</p>
        )}
        <div className="card-actions">
          <Link to={`/services/${service?.id}`}>
            <button className="btn btn-primary">{service?.button.text}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Planner from '../Planner/Planner';

const About = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-4xl font-bold text-center my-10">
        A team we are proud of team
      </h2>
      <p className="text-xl text-center">
        Phasellus viverra nulla ut metus varius laoreet quisque rutrum. Aenean
        imperdiet etiam ultricies nisi augue. Curabitur ullamcorper ultricies
        nisi. Nam eget dui etiam rhoncus, maecenas.
      </p>
      <div></div>
      <Planner />
      <Footer />
    </div>
  );
};

export default About;

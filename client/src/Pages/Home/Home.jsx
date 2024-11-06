import React from 'react';
import Nav from "../../Components/Nav";
import Footter from '../../Components/Footter';
import Greeting from './Greeting';
import AuthLoginTailor from './AuthLoginTailor';
import AboutUs from './AboutUs';

const Home = () => {

  return (
    <>
      <div className="bg-gray-100">
        <AuthLoginTailor/>
        <Greeting/>
        <AboutUs/>
        <Footter />
      </div>
    </>
  );
};

export default Home;

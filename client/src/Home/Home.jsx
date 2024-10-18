import React, { useState, useEffect } from 'react';
import Footter from '../Components/Footter';
import Greeting from './Greeting';
const Home = () => {

  return (
    <>
      <Greeting/>
      <Footter />
    </>
  );
};

export default Home;

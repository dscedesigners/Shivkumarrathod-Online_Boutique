import React, { useState, useEffect } from 'react';
import Footter from '../Components/Footter';
import Greeting from './Greeting';
import AuthLoginTailor from './AuthLoginTailor';
const Home = () => {

  return (
    <>
      <AuthLoginTailor/>
      <Greeting/>
      <Footter />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import Nav from "../../Components/Nav";
import Footter from '../../Components/Footter';
import Showcase from './Showcase';
import Products from './Products';
import Services from './Services';
import Poster from './Poster';
import WhatWeDo from './WhatWeDo';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50">
      <Showcase />
      <Products />
      <Services />
      <Poster />
      <WhatWeDo />
      <Footter />
    </div>
  );
}

export default Home;

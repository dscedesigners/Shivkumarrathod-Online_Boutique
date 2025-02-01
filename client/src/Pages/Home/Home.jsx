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
  const [user,setUser] = useState('')

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
        console.log(user);
        
      }
      else{
        navigate('/account')
      }
    })
  })
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50">
      <Nav data={user}/>
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

import React from 'react';
import Navbar from "../assets/Navbar";
import {useNavigate} from "react-router-dom"

function Home() {

    let navigate = useNavigate();

  return (
    <div className="App">
    <Navbar />
    <h1 className='text-test'>GEAR UP < br/> YOUR NFT < br/> PURCHASE!</h1>
    
      {/* <img className='img' max-width="100%" src='./gearfi.jpg' alt='gearfi community'/> */}
    <button className='btn-grad' onClick={() => {
        navigate("/sell");
    }}>
        SELL NFT
    </button>
    <button className='btn-grad' onClick={() => {
        navigate("/marketplace");
    }}>
        Marketplace
    </button>
     <div className="dark-bg">
      <div className="gradient-bg"></div>
      
    </div>
  </div>
  )
}

export default Home
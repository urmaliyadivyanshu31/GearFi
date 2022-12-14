import React from 'react'
import Navbar from '../assets/Navbar'
import Card from "../assets/Card"


function Marketplace() {
  return (
    <div className='App'>
        <Navbar />
        <div className='marketplace'>
          <h1>
            Marketplace
          </h1>
          <Card />
        </div>
    </div>
  )
}

export default Marketplace
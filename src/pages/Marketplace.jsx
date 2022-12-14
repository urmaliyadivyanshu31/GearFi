import React from 'react'
import Navbar from '../assets/Navbar'
function Marketplace() {
  return (
    <div className='App'>
        <Navbar />
        <div className='marketplace'>
          <h1>
            Marketplace
          </h1>
          
<a href="#" class="card">
  <div class="card__body">
    <div class="card__top">
      <div class="card__owner">
        <div class="card__avatar"></div>
        <div class="card__user">
          <span class="card__user__title">Owned by</span>
           <span class="card__user__code">2304RC</span>
        </div>
      </div>
      <div class="card__creator">
        <div class="card__avatar"></div>
        <div class="card__user">
          <span class="card__user__title">Created by</span>
           <span class="card__user__code">20AR02</span>
        </div>
      </div>
    </div>
    <div class="card__image">
      <img src="https://source.unsplash.com/OOFSqPWjCt0/1600x900" alt="Just a random image" />
    </div>
  </div>
  <div class="card__info">
    <p><b>Price:</b> ETH 2.00</p>
    <p>($3,565.48)</p>
  </div>
  <div class="card__footer">
    <span class="card__btn card__btn--secondary">View history</span>
    <span class="card__btn card__btn--primary">Buy Now</span>
  </div>
</a>
        </div>
    </div>
  )
}

export default Marketplace
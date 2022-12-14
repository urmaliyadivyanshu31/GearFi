import React from 'react'

function Card() {
  return (
    <>
        <a href="#" className="card">
  <div className="card__body">
    <div className="card__top">
      <div className="card__owner">
        <div className="card__avatar"></div>
        <div className="card__user">
          <span className="card__user__title">Owned by</span>
           <span className="card__user__code">2304RC</span>
        </div>
      </div>
      <div className="card__creator">
        <div className="card__avatar"></div>
        <div className="card__user">
          <span className="card__user__title">Created by</span>
           <span className="card__user__code">20AR02</span>
        </div>
      </div>
    </div>
    <div className="card__image">
      <img src="https://source.unsplash.com/OOFSqPWjCt0/1600x900" alt="Just a random image" />
    </div>
  </div>
  <div className="card__info">
    <p><b>Price:</b> ETH 2.00</p>
    <p>($3,565.48)</p>
  </div>
  <div className="card__footer">
    <span className="card__btn card__btn--secondary">View history</span>
    <span className="card__btn card__btn--primary">Buy Now</span>
  </div>
</a>
    </>
  )
}

export default Card
import React from 'react'
import  './card.css'
import skip from '../../assets/img.jpg'


function Card({ data }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={skip} alt="Skip" />
        <div className="image-gradient" />
        <div className="postcode-badge">{data.postcode}</div>
        <div className="image-title">{data.size} Yard Skip</div>
     
      </div>
      <div className='card-description'>
      <p> {data.hire_period_days} days hire period</p>
   
    
      {data.price_before_vat !== null ? (
        <p>Price Before VAT: <span>£{data.price_before_vat.toFixed(2)}</span> </p>
      ) : (
        <>
          <p>Transport Cost: £{data.transport_cost}</p>
          <p>Per Tonne Cost: £{data.per_tonne_cost}</p>
        </>
      )}

      {/* <p>Allowed On Road: {data.allowed_on_road ? 'Yes' : 'No'}</p>
      <p>Allows Heavy Waste: {data.allows_heavy_waste ? 'Yes' : 'No'}</p> */}
    </div>
    <button className='btn'>Book Now</button>
    </div>
  );
}

export default Card;

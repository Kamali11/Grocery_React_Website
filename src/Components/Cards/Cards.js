import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = ({id,to, img,product_name, mrp,onClick, offer_presentage, isTrue}) => {
  return (
    <div className="card" key={id}>
    <Link to={to}>
        <img className='product_picture' src={img} alt='...' />
        <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>Vegtable</p>
        <p className="tle-veg">{product_name}</p>
    </Link>
        <div className="adding">
            <p className="price" style={{ color: "rgb(207, 8, 108)" }}>MRP {mrp}</p>
            <Link onClick={onClick}><i className="fa-solid fa-cart-arrow-down"></i>Add</Link>
        </div>
        {
            isTrue ? (
                <div className="offer">
                <p><i>Offer {offer_presentage}</i></p>
        </div>
            ):''
        }
</div>
  )
}

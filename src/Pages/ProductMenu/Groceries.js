import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import {groceries} from '../../Data/GroceriesData'

const Groceries = ({handleAddCart}) => {
    const openMenu=()=>{
        const icon=document.getElementById('left-btn')
        icon.style.width='100%'
     }
     const closeMenu=()=>{
        const icon=document.getElementById('left-btn')
        icon.style.width='0'
     }
  return (
    <div>
        <section>
                <div className="veg1">
                    <Link to={'/'} style={{ color: "#149104" }}>Home</Link>
                    <p>{">"}</p>
                    <Link to={'/menu'}>Category</Link>
                    <p>{">"}</p>
                    <Link to={'/fruit'}>Fruits</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                       <Link to={'/groceries/146'}>Organic Egg</Link>
                       <Link to={'/groceries/147'}>Turmeric Powder</Link>
                       <Link to={'/groceries/148'}>Red chilli Powder</Link>
                       <Link to={'/groceries/149'}>Coriender Leaf</Link>
                       <Link to={'/groceries/150'}>Curry Leaf</Link>
                       <Link to={'/groceries/151'}>Mentha spicata</Link>
                       <Link to={'/groceries/152'}>Ginger</Link>
                       <Link to={'/groceries/153'}>Fresh milk</Link>
                       <Link to={'/groceries/154'}>Green chilli</Link>
                       <Link to={'/groceries/155'}>Red chilli</Link>
                       <Link to={'/groceries/156'}>Curd</Link>
                       <Link to={'/groceries/157'}>Big salt</Link>
                       <Link to={'/groceries/158'}>small salt</Link>
                       <Link to={'/groceries/159'}>Sugar</Link>
                       <Link to={'/groceries/160'}>Brown sugar</Link>
                       <Link to={'/groceries/161'}>Jaggery</Link>
                       <Link to={'/groceries/162'}>Mushroom</Link>
                       <Link to={'/groceries/163'}>Panner</Link>
                       <Link to={'/groceries/164'}>Cheese</Link>
                       <Link to={'/groceries/165'}>Bread</Link>
                       <Link to={'/groceries/166'}>Jam</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Groceries</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.</p>
                    </div>
                    <div className="row-1">
                        {groceries.length > 0 ? (
                            groceries.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/groceries/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>grocery</p>
                                            <p className="tle-veg">{item.product_name}</p>
                                                </Link>

                                            <div className="adding">
                                                <p className="price" style={{ color: "rgb(207, 8, 108)" }}>MRP {item.mrp}</p>
                                                <Link onClick={() => handleAddCart(item)}><i className="fa-solid fa-cart-arrow-down"></i>Add</Link>
                                            </div>
                                            <div className="offer">
                                                {item.offer ? (
                                                    <p><i>Offer {item.offer_presentage}</i></p>
                                                ) : ''}
                                            </div>
                                    </div>
                                )
                            })) : 'Data Not Found'}

                    </div>


                </section>
            </section>
    </div>
  )
}

export default Groceries

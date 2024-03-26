import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import { grains } from '../../Data/GrainData'

const Grains = ({handleAddCart}) => {
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
                    <Link to={'/grains'}>Grains</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                       <Link to={'/grains/66'}>Basmati Rice</Link>
                       <Link to={'/grains/67'}>Wheat</Link>
                       <Link to={'/grains/68'}>Rice</Link>
                       <Link to={'/grains/69'}>Blackeye Peas</Link>
                       <Link to={'/grains/70'}>Black gram</Link>
                       <Link to={'/grains/71'}>Black Sesame</Link>
                       <Link to={'/grains/72'}>ChickPea</Link>
                       <Link to={'/grains/73'}>Coffee grains</Link>
                       <Link to={'/grains/74'}>Coriender seeds</Link>
                       <Link to={'/grains/75'}>Corn</Link>
                       <Link to={'/grains/76'}>Cumin</Link>
                       <Link to={'/grains/77'}>Green Peas</Link>
                       <Link to={'/grains/78'}>Fenugreek</Link>
                       <Link to={'/grains/79'}>Garbenzo Beans</Link>
                       <Link to={'/grains/80'}>Mung Beans</Link>
                       <Link to={'/grains/81'}>Mustrad</Link>
                       <Link to={'/grains/82'}>Pepper</Link>
                       <Link to={'/grains/83'}>Pistachios</Link>
                       <Link to={'/grains/84'}>Red beans</Link>
                       <Link to={'/grains/85'}>Small cumin</Link>
                       <Link to={'/grains/86'}>Soybeans</Link>
                       <Link to={'/grains/87'}>Split bengal gram</Link>
                       <Link to={'/grains/88'}>Split Pigeon gram</Link>
                       <Link to={'/grains/89'}>Kidney beans</Link>
                      
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Grains</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Whole grains provide fiber, vitamins, minerals and other nutrients. Whole-grain foods help control of cholesterol levels, weight and blood pressure. These foods also help lower the risk of diabetes, heart disease and other conditions.</p>
                    </div>
                    <div className="row-1">
                        {grains.length > 0 ? (
                            grains.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/grains/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>grains</p>
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

export default Grains

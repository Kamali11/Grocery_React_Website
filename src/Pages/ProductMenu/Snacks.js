import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import { snacks } from '../../Data/SnackData'

const Snacks = ({handleAddCart}) => {
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
                    <Link to={'/snacks'}>Snacks</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                        <Link to={'/snacks/130'}>Caramel Popcorn</Link>
                        <Link to={'/snacks/131'}>Butter croissant</Link>
                        <Link to={'/snacks/132'}>Banana slices</Link>
                        <Link to={'/snacks/133'}>Salty snacks</Link>
                        <Link to={'/snacks/134'}>Masala wheels</Link>
                        <Link to={'/snacks/135'}>Lays</Link>
                        <Link to={'/snacks/136'}>Potato fry</Link>
                        <Link to={'/snacks/137'}>Kurkure</Link>
                        <Link to={'/snacks/138'}>Smoosa</Link>
                        <Link to={'/snacks/139'}>Biscuit tracker</Link>
                        <Link to={'/snacks/140'}>Potato sauce</Link>
                        <Link to={'/snacks/141'}>Black Forest</Link>
                        <Link to={'/snacks/142'}>Browney</Link>
                        <Link to={'/snacks/143'}>Square Pastels</Link>
                        <Link to={'/snacks/144'}>Red Velvet</Link>
                        <Link to={'/snacks/145'}>Cookies</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Snacks</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Provides a boost of energy if several hours pass between meals and blood glucose levels drop. Helps curb your appetite to prevent overeating at the next meal. Provides extra nutrients when choosing certain snacks like fresh fruit or nuts.</p>
                    </div>
                    <div className="row-1">
                        {snacks.length > 0 ? (
                            snacks.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/snacks/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>Snacks</p>
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

export default Snacks

import React from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'
import { fruits } from "../../Data/FruitData";

const Fruit = ({handleAddCart}) => {
    const openMenu=()=>{
        const icon=document.getElementById('left-btn')
        icon.style.width='100%'
     }
     const closeMenu=()=>{
        const icon=document.getElementById('left-btn')
        icon.style.width='0'
     }

     ScrollReveal().reveal('.card', {
        delay: 375,
        duration: 500,
        reset: true,
        origin:'bottom',
        distance:'200px'
    });
   
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
                        <Link to={'/fruits/25'}>Apple</Link>
                        <Link to={'/fruits/26'}>Banana</Link>
                        <Link to={'/fruits/27'}>Black Current</Link>
                        <Link to={'/fruits/28'}>Blue Berry</Link>
                        <Link to={'/fruits/29'}>Boysenberry</Link>
                        <Link to={'/fruits/30'}>Papaya</Link>
                        <Link to={'/fruits/31'}>Gooseberry</Link>
                        <Link to={'/fruits/32'}>Grapes</Link>
                        <Link to={'/fruits/33'}>Jack Fruit</Link>
                        <Link to={'/fruits/34'}>Kiwi</Link>
                        <Link to={'/fruits/35'}>Mango</Link>
                        <Link to={'/fruits/36'}>Orange</Link>
                        <Link to={'/fruits/37'}>Pineapple</Link>
                        <Link to={'/fruits/38'}>Stawberry</Link>
                        <Link to={'/fruits/39'}>Water melan</Link>
                        <Link to={'/fruits/40'}>Pomegranate</Link>
                        <Link to={'/fruits/41'}>Guava</Link>
                        <Link to={'/fruits/42'}>Plum</Link>
                        <Link to={'/fruits/43'}>Pear</Link>
                        <Link to={'/fruits/44'}>Lemon</Link>
                        <Link to={'/fruits/45'}>Cucumber</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Fruits</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.</p>
                    </div>
                    <div className="row-1">
                        {fruits.length > 0 ? (
                            fruits.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/fruits/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>fruit</p>
                                            <p className="tle-veg">{item.product_name}</p>
                                        </Link>

                                            <div className="adding">
                                                <p className="price" style={{ color: "rgb(207, 8, 108)" }}>MRP {item.mrp}</p>
                                                <Link onClick={( ) =>handleAddCart(item)}><i className="fa-solid fa-cart-arrow-down"></i>Add</Link>
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

export default Fruit

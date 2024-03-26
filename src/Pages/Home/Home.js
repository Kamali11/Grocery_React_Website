import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import img1 from '../../assets/back-grd1.jpg'
import img2 from '../../assets/back-grd2.jpg'
import img3 from '../../assets/back-grd3.jpg'
import Menu from '../ShopMenu/Menu'
import TopDeals from '../TopDeals/TopDeals'
import NewArrivals from '../NewArrivals/NewArrivals'
// import { motion } from 'framer-motion'




   
const Home = () => {


  return (
    <div>
      
      <section id="slider-container">
            <div className="slider-content" id="slider-content"> 
                <div className="slide">
                    <img src={img1} alt="src."/>
                    <div className="inside inside-1">
                        <p className="item-1">Order vegetables online at affordable price and best quality</p>
                        <p className="free">Get FREE delivery on all orders!</p>
                        <Link className='orderbtn' to={'/vegtables'}>Order Now!</Link>
                    </div>
                </div>
                <div className="slide">
                    <img src={img2} alt="src."/>
                    <div className="inside inside-2">
                        <p className="item-2">Buy Nuts and Dry Fruits</p>
                        <p className="free">Get FREE delivery on all orders!</p>
                        <button><Link>Order Now!</Link></button>
                    </div>

                </div>
                <div className="slide">
                    <img src={img3} alt="src."/>
                    <div className="inside inside-3">
                        <p className="item-3">Fresh Fruits are available</p>
                        <p className="free">Get FREE delivery on all orders!</p>
                        <button><Link>Order Now!</Link></button>
                    </div>
                </div>
            </div>
</section>


        {/* menupage */}
            <Menu/>
            <div className='advertisement'>
                <Link to={'/snacks'}>
                <img className='img1' src='http://grano.mallthemes.com/wp-content/uploads/2021/01/img-banner2-1.jpg' alt='...'/>
                <div className='in in_ad'>
                    <i>Snack Food</i>
                   <p>Take a break with your snacks</p>
                   <Link to={'/snacks'}>Shop Now</Link>
                </div>
                </Link>
                <Link>
                <img src='http://grano.mallthemes.com/wp-content/uploads/2021/01/img-banner2-2.jpg' alt='...'/>
                <div className='out in_ad'>
                    <i>The New</i>
                    <p>Crackers Cookies</p>
                </div>
                </Link>
                <Link>
                <img src='http://grano.mallthemes.com/wp-content/uploads/2021/01/img-banner2-3.jpg' alt='....'/>
                <div className='out in_ad'>
                    <i style={{color:'black'}}>Delicious</i>
                    <p style={{color:'black'}}>Fresh Chocolate</p>
                </div>
                </Link>
            </div>

         
            {/* <p  className='cata-title'>Top Offers</p>
            <div className='offer_menus'>    
                <Link className='offers' to={'/topdeals'}>
                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_dow-topoffersStorefront_m_480_250723_01.jpg' alt='...'/>
                </Link>
                <Link className='offers'>
                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_big-packs-topoffersStorefront_m_480_250723_02.jpg' alt='...'/>
                </Link>
                <Link className='offers'>
                <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_combos-topoffersStorefront_m_480_250723_03.jpg' alt='...'/>
                </Link>
                <Link className='offers'>
                <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_30-corner-topoffersStorefront_m_480_250723_04.jpg' alt='...'/>
                </Link>
            </div> */}
            <TopDeals/>
            <NewArrivals/>

            {/* <div>
                <img src='https://img.freepik.com/free-vector/fast-food-special-offer-horizontal-banners-set-with-burgers-french-fries-ice-cream-donuts-sandwich-cartoon-isolated-vector-illustration_1284-29997.jpg?t=st=1709806579~exp=1709810179~hmac=e32ebeabe431672035c77451fb1c4d7eed164108b28100be9fca491ffe4f39ae&w=740'/>
            </div> */}

            

       
    </div>
  )
}

export default Home

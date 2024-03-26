import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import img1 from '../../assets/secure-main.jpg'
import img2 from '../../assets/trust-main.jpg'
import img3 from '../../assets/help-main.jpg'
import img4 from '../../assets/shipping-main.jpg'
import img from '../../assets//logo-removebg.png'



const Footer = ({size,wish}) => {
  

  return (
    <div>
        <div className="subscribe">
            <div className="sub-1">
                <p>Join Our Newsletter Now</p>
                <p>Register now to get updates on Promotions and Coupons</p>
            </div>
            <div className="sub-2">
                <input type="text" placeholder="Your Email Address..." />
                <button type="button">SUBSCRIBE!</button>
            </div>
            <div className="sub-3">
                <div className="box1">
                    <Link><i className="fa-brands fa-google-play"></i></Link>
                    <p>ANDRIOD APP ON Google Play</p>
                </div>
                <div className="box1">
                    <Link> <i className="fa-solid fa-mobile-screen-button"></i></Link>
                    <p>Available on the App Store</p>
                </div>
            </div>
        </div>

        <div className="main-benefit">
            <img src={img1} alt='img1'/>
            <img src={img2} alt='img2'/>
            <img src={img3} alt='img3'/>
            <img src={img4} alt='img4'/>
        </div>

       <footer className="footer">
        <div className="column-1">
            <div className='logoname'> 
           <div className='logo'>
           <img  src={img} alt='img'/>
           </div>
            </div>
            <p className="sec-p">Founded 25 years ago, Ekart boasts a safe skincare collection that is healthy for our
                bodies and the earth</p>
            <p style={{color: "#404040"}}><i className="fa-solid fa-map-location-dot"></i> 11, North St,Madurai, TamilNadu</p>
            <p style={{color: "#404040"}}><i className="fa-solid fa-envelope-circle-check"></i>kamalishakila0120@gmail.com</p>
            <p style={{color: "#404040"}}><i className="fa-solid fa-phone-volume"></i> +91 0123456789</p>
        </div>


        <div className="column-2">
            <b>
                <p style={{fontSize: "19px"}}>All Categories</p>
            </b>
            <Link to={'/menu'}>Shop Categories</Link>
            <Link to={'/vegtables'}>Vegetables</Link>
            <Link to={'/nuts'}>Nuts</Link>
            <Link to={'/grains'}>Grains</Link>
            <Link to={'/fruits'}>Fruits</Link>
        </div>

        <div className="column-3">
            <b>
                <p style={{fontSize: "18px"}}>Customer Account</p>
            </b>
            <Link to={'/storelocation'}>My Account</Link>
            <Link to={'/trackorder'}>My orders</Link>
            <Link>Wishlist</Link>
            <Link>Payment methods</Link>
            <Link>Grano Wallet</Link>
        </div>  

         <div className="column-4">
            <b>
                <p style={{fontSize: "18px"}}>Help & Support</p>
            </b>
            <Link>About us</Link>
            <Link>FAQ</Link>
            <Link>Terms & Conditions</Link>
            <Link>Copy right</Link>
            <Link>Company</Link>
        </div> 

        <div className="column-5">

           <div className="first">    
               <b><p style={{fontSize: "18px", marginBottom: "10px"}}>Connect with Us</p></b> 
                <Link style={{color: "#1877F2"}}><i className="fa-brands fa-facebook"></i></Link>
                <Link style={{color: "black"}}><i className="fa-brands fa-x-twitter"></i></Link>
                <Link className="google-icn"><i className="fa-brands fa-google"></i></Link>
                <Link style={{color: "red"}}><i className="fa-brands fa-instagram"></i></Link>
                <Link style={{color: "red"}}><i className="fa-brands fa-pinterest"></i></Link>
            </div> 
            <div className="second">
                <b>
                    <p style={{fontSize: "18px", marginBottom: "10px"}}>Payment methods</p>
                </b>
                <Link><img src="https://i.pinimg.com/736x/60/5a/bd/605abdb7af3405c6b20a426b1e128322.jpg" alt=""/></Link>
                <Link><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKmwT4Lg-b_pzcg000VGriLCqu-90Ot7ibgjRQT2u1g&s" alt=""/></Link>
                <Link><img src="https://thumbs.dreamstime.com/b/web-184786300.jpg" alt=""/></Link>
                <Link><img src="https://cdn.vox-cdn.com/thumbor/FtAV-Waa1rTPheAkxv3o4i0MVf0=/0x0:1000x1000/1200x800/filters:focal(421x430:581x590)/cdn.vox-cdn.com/uploads/chorus_image/image/62800797/Mastercard_logo.0.jpg" alt=""/></Link>
            </div> 
        </div>
     </footer> 
     {/* <Link href="#body" className="up-arrow"><i className="fa-solid fa-arrow-up"></i></Link> */}

    <footer className="last-footer">
        <p>Copyright © Designed by <Link>Kamali</Link></p>
    </footer>

    <div className="mobile-view">
        <div className="bottom-mb">
            <div className="home">
                <Link to={'/'}> <i className="fa-solid fa-house-user"></i> <p>Home</p></Link>
                
            </div>
            <div className="items-mb">
                <Link to={'/menu'}><i className="fa-solid fa-table-cells-large"></i><p>Category</p></Link> 
            </div>
            <div className="heart-mb">
                <Link id="count" ><i className="fa-solid fa-heart"></i><span className='countno'>{wish}</span><p>Wishlist</p>
                </Link>
              
            </div>
            <div className="shp-mb">
                <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i><span className='countno'>{size}</span><p>Basket</p></Link>
              
            </div>
        </div>
    </div>

    </div>
  )
}

export default Footer

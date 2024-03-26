import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom'
// import icon1 from '../../assets/raddish.png'
// import icon2 from '../../assets/icon-2.jpg'
// import icon3 from '../../assets/icon-3.jpg'
// import icon4 from '../../assets/icon-4.jpg'
// import icon5 from '../../assets/icon-5.jpg'
// import icon6 from '../../assets/icon-6.jpg'
// import icon7 from '../../assets/icon-7.jpg'
// import icon8 from '../../assets/icon-8.jpg'
// import icon9 from '../../assets/icon-9.jpg'
// import icon10 from '../../assets/icon-10.jpg'





const Menu = () => {
  return (
    <div>
        <section id="section2">
            <div className="cata-title">
                <Link to={'/menu'}>Shop By Category</Link>
            </div>
            <div className="menu-card">
                <div className="row-1-icon">
                    <div className="icon icon-1">
                        <Link to='/vegtables'> <img src='https://img.freepik.com/premium-photo/small-garden-radish_272595-1694.jpg?w=740' alt=""/> </Link>
                        <p style={{textAlign:'center'}}>Vegetables</p>
                    </div>
                    <div className="icon icon-2">
                        <Link to='/fruits'><img src='https://img.freepik.com/premium-photo/fresh-red-apple-fruit-with-sliced-green-leaves-isolated-white-background_252965-8.jpg?w=740' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Fruits</p>
                    </div>
                    <div className="icon icon-3">
                        <Link to={'/nuts'}><img src='https://img.freepik.com/premium-photo/almond-nuts-with-three-green-leaves_159938-98.jpg?w=740' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Nuts</p>
                    </div>
                    <div className="icon icon-4">
                        <Link to={'/juices'}><img src='https://img.freepik.com/premium-photo/pomegranate-with-seeds-glass-juice_126801-56.jpg?w=826' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Juices</p>
                    </div>
                    <div className="icon icon-5">
                        <Link to={'/grains'}><img src= 'https://img.freepik.com/premium-photo/azuki-bean-red-bean-seeds-top-view-white-background-top-view_253984-68.jpg?w=740' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Grains</p>
                    </div>
                </div>
                <div className="row-2-icon">
                    <div className="icon icon-6">
                        <Link to={'/icecreams'}><img src='https://img.freepik.com/premium-photo/ice-cream-scoops-bowl-white-background_488220-3940.jpg?w=826' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Ice Creams</p>
                    </div>
                    <div className="icon icon-7">
                        <Link to={'/oils'}><img src= 'https://img.freepik.com/premium-photo/oil-bottle-peanuts-white-space_55883-2095.jpg?w=826' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Oils</p>
                    </div>
                    <div className="icon icon-8">
                        <Link to={'/frozenfoods'}><img src='https://i.pinimg.com/564x/80/b8/fd/80b8fd3f65d8a8e6c24cc9109564bfca.jpg' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Frozen Foods</p>
                    </div>
                    <div className="icon icon-9">
                        <Link to={'/snacks'}><img src='https://img.freepik.com/free-photo/fresh-potatoes-fri-with-souce_144627-5503.jpg?t=st=1709629646~exp=1709633246~hmac=c00499a0fd0c6c0ee56b60b075db98c5fe5a506326b9776d58fa62438e6b6e9c&w=826' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Snacks</p>
                    </div>
                    <div className="icon icon-10">
                        <Link to={'/groceries'}><img src='https://img.freepik.com/free-photo/champignon-mushroom_1398-718.jpg?t=st=1709640700~exp=1709644300~hmac=3a35c72f630eb789de0256835dfe6778ddc324857ccc3dbbad6682d2531a9d90&w=740' alt=""/></Link>
                        <p style={{textAlign:'center'}}>Other Groceries</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Menu

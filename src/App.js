import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Product_Vegtable from "./Components/Product_Details/Product_Vegtable";
import Blog from "./Pages/Blog/Blog";
import Vegtable from "./Pages/ProductMenu/Vegtable";
import Fruit from "./Pages/ProductMenu/Fruit";
import Menu from "./Pages/ShopMenu/Menu";
import Nuts from "./Pages/ProductMenu/Nuts";
import Juices from "./Pages/ProductMenu/Juices";
import Grains from "./Pages/ProductMenu/Grains";
import Icecream from "./Pages/ProductMenu/Icecream";
import Oils from "./Pages/ProductMenu/Oils";
import Frozenfood from "./Pages/ProductMenu/Frozenfood";
import Snacks from "./Pages/ProductMenu/Snacks";
import Groceries from "./Pages/ProductMenu/Groceries";
import Product_Fruit from "./Components/Product_Details/Product_Fruit";
import Product_Nuts from "./Components/Product_Details/Product_Nuts";
import Product_Juices from "./Components/Product_Details/Product_Juices";
import Product_Icecreams from "./Components/Product_Details/Product_Icecreams";
import Product_Grains from "./Components/Product_Details/Product_Grains";
import Product_Oils from "./Components/Product_Details/Product_Oils";
import Product_Frozenfoods from "./Components/Product_Details/Product_Frozenfoods";
import Products_Snacks from "./Components/Product_Details/Products_Snacks";
import Product_Groceries from "./Components/Product_Details/Product_Groceries";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import StoreLocation from "./Pages/StoreLocation/StoreLocation";
import TopDeals from "./Pages/TopDeals/TopDeals";
import NewArrivals from "./Pages/NewArrivals/NewArrivals";
import Products from "./Pages/Products/Products";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import toast from "react-hot-toast";
import Pages from "./Pages/PagesNav/Pages";
import BlogPages from "./Pages/BlogPages/BlogPages";
import Carousel from "./Components/Carousel/Carousel";
// import ImageSlider from './ImageSlider';









function App() {
  const [cart,setCart]=useState([])
  const[wish,setWish]=useState([])


  const [addCart, setAddCart] = useState([])
  const handleAddCart = (para) =>{
     setAddCart([...addCart,para])
     toast.success('Product Added Successfully')
     localStorage.setItem('addCart' , JSON.stringify(addCart))
    
     let isPresent=false;
     cart.forEach((product)=>{
      if (para.id=== product.id)
      isPresent=true
     })
     if (isPresent)
     return;
    setCart([...cart,para])
  }
   
  const productImages = [
    'https://img.freepik.com/free-photo/flat-lay-vegetables-frame_23-2148516769.jpg?t=st=1709806308~exp=1709809908~hmac=0e052dcd040dfc0dc23f43c5ac8c931a61145ded2a19da1653c8acad432f7fcd&w=996',
    'https://img.freepik.com/free-photo/top-view-delicious-nuts-concept_23-2148694020.jpg?t=st=1709806487~exp=1709810087~hmac=8234dcedc0e1217a92462d55065ed717dec801187004fb3ea73a14cbfbaf0a44&w=826',
    'https://img.freepik.com/free-photo/arrangement-with-pizza-sauce-copy-space_23-2148247939.jpg?t=st=1709806688~exp=1709810288~hmac=7c359580d186dec57bf06fad99a22d710750263931e5292178006fb9bc2a2dbf&w=826',
    // Add more image URLs as needed
  ];

  return (
    <>
    <Navbar id="navbar" size={cart.length} wish={wish.length}/>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="/vegtables" element={<Vegtable handleAddCart={handleAddCart}/>}/>
          <Route path="/fruits" element={<Fruit handleAddCart={handleAddCart}/>}/>
          <Route path="/nuts" element={<Nuts  handleAddCart={handleAddCart}/>}/>
          <Route path="/juices" element={<Juices  handleAddCart={handleAddCart}/>}/>
          <Route path="/grains" element={<Grains  handleAddCart={handleAddCart}/>}/>
          <Route path="/icecreams" element={<Icecream  handleAddCart={handleAddCart}/>}/>
          <Route path="/oils" element={<Oils  handleAddCart={handleAddCart}/>}/>
          <Route path="/frozenfoods" element={<Frozenfood  handleAddCart={handleAddCart}/>}/>
          <Route path="/snacks" element={<Snacks  handleAddCart={handleAddCart}/>}/>
          <Route path="/groceries" element={<Groceries  handleAddCart={handleAddCart}/>}/>
          <Route path="/menu" element={<Menu handleAddCart={handleAddCart}/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/trackorder" element={<TrackOrder/>}/>
         <Route path="/storelocation" element={<StoreLocation/>}/>
         <Route path="/topdeals" element={<TopDeals  handleAddCart={handleAddCart}/>}/>
         <Route path="/newarrivals" element={<NewArrivals  handleAddCart={handleAddCart}/>}/>
         <Route path="/products" element={<Products handleAddCart={handleAddCart}/>}/>
         <Route path="/cart" element={<Cart addCart={addCart} setAddCart={setAddCart}/>}/>
         <Route path="/pages" element={<Pages/>}/>
         <Route path="/carousel" element={<Carousel images={productImages}/>}/>
    

          {/* Params Based Router */}
          <Route path="/vegtable/:id" element={<Product_Vegtable  handleAddCart={handleAddCart}/>}/>
          <Route path="/fruits/:id" element={<Product_Fruit  handleAddCart={handleAddCart}/>}/>
          <Route path="/nuts/:id" element={<Product_Nuts  handleAddCart={handleAddCart}/>}/>
          <Route path="/juices/:id" element={<Product_Juices  handleAddCart={handleAddCart}/>}/>
          <Route path="/grains/:id" element={<Product_Grains  handleAddCart={handleAddCart}/>}/>
          <Route path="/icecreams/:id" element={<Product_Icecreams  handleAddCart={handleAddCart}/>}/>
          <Route path="/oils/:id" element={<Product_Oils  handleAddCart={handleAddCart}/>}/>
          <Route path="/frozenfoods/:id" element={<Product_Frozenfoods  handleAddCart={handleAddCart}/>}/>
          <Route path="/snacks/:id" element={<Products_Snacks  handleAddCart={handleAddCart}/>}/>
          <Route path="/groceries/:id" element={<Product_Groceries  handleAddCart={handleAddCart}/>}/>
          <Route path="/blog/:id" element={<BlogPages/>}/>
        </Routes>
        <Footer size={cart.length} wish={wish.length}/>
    </>
  );
}

export default App;

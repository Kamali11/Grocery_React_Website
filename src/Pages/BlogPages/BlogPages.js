import React from 'react'
import { blog } from '../../Data/Blog';
import { useParams } from 'react-router-dom';
import './BlogPages.css'

const BlogPages = () => {
    const { id } = useParams();
    let result = blog.filter((item) => item.id == id);
  return (
    <div>
       {result.map((item, id) => {
        return (
          <div key={id}>
            <div className='blog_img'>
                <img src={item.picture}/>
                <div className='incontent'>
                    <p>{item.title}</p>
                </div>
            </div>
            <div className='blog_content'>
            <p>Online grocery shopping is beneficial than the traditional shopping as you can buy the groceries from the comfort of your home online through the company website or app and avail same day grocery delivery services. In today’s busy schedule, trying to find a good supermarket, travelling in a huge traffic to reach that place, spending a lot of time searching for the products, waiting near the bill counters, parking space issues, etc.</p>
            <p>Are time-taking which you can use for some other purpose if the shopping is done in online. E-commerce is the biggest online evolution due to which almost everything became online including grocery shopping. As people now are looking for comfort and convenience, most of the customers prefer online grocery shopping where you can get same day grocery delivery services. </p>
            <p className='heading'>Advantages of Online Grocery Shopping</p>
            <p>Most of the people prefer to make online grocery shopping as it comes with many benefits giving a good shopping experience. You can save a lot of time, money and even avail the benefits of same day grocery delivery service. The reasons why customers are not going with traditional shopping may be due to a lot of issues like traffic, parking issues, weather conditions, need to wait near billing counters, etc. Let’s have a look at some of the major advantages of online grocery shopping.</p>
            <p className='heading'>Huge variety of products</p>
            <img src='https://foodrunner.ca/assets/admin/base/images/blog_detail/Foodrunner_variety-of-products.jpg' alt='....'/>
            <p>In online grocery shopping you can choose from a huge variety of products whereas in traditional shopping you may not get much space to store all the products. In traditional shopping, customers may not get a chance to buy from a wide range of products as compared to online grocery shopping which gives a good shopping experience.</p>
            <p className='heading'>Home delivery</p>
            <img src='https://foodrunner.ca/assets/admin/base/images/blog_detail/Foodrunner_delivery.jpg' alt='...'/>
            <p>The major advantage of online grocery shopping is that you get the groceries delivered to your doorstep. The best online grocery delivery services offer same day grocery delivery service to the customers. As today everyone young or old is much aware of the technology and well-versed with using smartphones, you can make online grocery shopping staying comfortably at your home and not carrying heavy bags as you always do in traditional grocery shopping.</p>
            <p className='heading'>Better prices</p>
            <p>In online grocery shopping you can purchase groceries for better prices as you will get the products at the wholesale prices only and also there will be same day delivery of products to your doorsteps. Also you can check the discounts and offers and avail them on the products you have purchased. When coming to traditional shopping, they do not keep perfect margins to sell the groceries because of which the online e-commerce platforms came into existence. Also, there are some of the major savings which are always ignored like petrol cost while travelling to supermarkets, cost for  carry bags, parking space costs, food or other purchases you make at the Mall.</p>
            <p className='heading'>Time saving</p>
            <p>Online grocery shopping saves a lot of time as you need not spend time in traffic, do not need to spend much time near the billing counter in the supermarket, no parking issues, etc. You can stay at home and make an easy checkout and same day grocery delivery saving a lot of time doing some productive things. Through online grocery shopping you will not face any issues like traffic or weather conditions as you always face with traditional shopping.</p>
            <p className='heading'>24/7 shopping </p>
            <img src='https://foodrunner.ca/assets/admin/base/images/blog_detail/Foodrunner_24hr-shopping.jpg' alt='...'/>
            <p> You can conveniently shop at any time using online grocery shopping. You can browse whatever products you need at any time and avail same day grocery delivery services. You need not rush to the supermarkets and shop the groceries in your leisure time and get the groceries delivered to your doorstep. You can even interact with the customer care executives to resolve your queries.</p>
            <p className='heading'>Find products easily </p>
            <img src='https://foodrunner.ca/assets/admin/base/images/blog_detail/Foodrunner_Find-products-easily.jpg' alt='...'/>
            <p>While doing online grocery shopping, you may find a huge variety of products, still it is easy to find the products by searching on websites or apps. You can check whether the product is available or not in a single click rather than roaming around the supermarket to find the product therefore getting tired, which always happens with traditional grocery shopping.</p>
            <p className='heading'>No unnecessary purchases </p>
            <p>In traditional shopping along with the products you need, sometimes you may tend to buy products that are not necessary. But while doing online grocery shopping, you tend to buy only the products that are necessary for you, add them to the cart and complete the shopping, where there won’t be any unnecessary expenses. This is the major advantage with the online grocery shopping where you can shop quickly and get same day grocery delivery services.</p>
            <p className='heading'>Not boring or tiring </p>
            <p>Most of the customers get bored or tired within a few minutes of traditional grocery shopping which results in frustration. When coming to online grocery shopping you can make the shopping quickly in your convenient time from anywhere and experience same day delivery of products resulting in a better shopping experience.</p>
            <p className='heading'>Simple replacement</p>
            <p>In traditional shopping if you want to return or replace a product, you need to travel with that heavy bag to the shop and need to return the product. When coming to online grocery shopping, you can replace or return the products through the website or app in a single click and the products returned or replaced as per your requirement.</p>
            <p className='heading'>Easy to reorder</p>
            <img src='https://foodrunner.ca/assets/admin/base/images/blog_detail/Foodrunner_Easy-to-reorder.jpg' alt='...'/>
            <p>Customers cannot make reordering with traditional shopping as the products they previously purchased will not be saved by the grocery store owner whereas in case of online grocery shopping your list of previously purchased products will be maintained in a database and you can easily add them to your cart, make few changes if needed and complete your shopping easily and quickly.</p>
            <p className='heading'>Conclusion</p>
            <p>Traditional way of shopping is getting reduced as people nowadays are running out of time to visit supermarkets and buy necessary products. Hence online grocery shopping came into existence where customers can buy groceries online at any time from anywhere. Most of the supermarkets are now offering online services to connect with their customers easily and offer same day grocery delivery services.</p>
            </div>
          </div>
       );
     })}
    </div>
   
  )
}

export default BlogPages

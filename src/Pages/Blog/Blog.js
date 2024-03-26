import React from 'react'
import './Blog.css'
import img from '../../assets/blog-backgrd.jpg'
// import img1 from '../../assets/blog-1.jpg'
// import img2 from '../../assets/blog-2.jpg'
// import img3 from '../../assets/blog-3.jpg'
// import img4 from '../../assets/blog-4.jpg'
// import img5 from '../../assets/blog-5.jpg'
// import img6 from '../../assets/blog-6.jpg'
// import img7 from '../../assets/blog-7.jpg'
// import img8 from '../../assets/blog-8.jpg'
// import img9 from '../../assets/blog-9.jpg'
// import img10 from '../../assets/blog-10.jpg'
// import img11 from '../../assets/blog-11.jpg'
// import img12 from '../../assets/blog-12.jpg'
import { Link } from 'react-router-dom'
import { blog } from '../../Data/Blog'



const Blog = () => {
  return (
    <div>
      <div className='backgrd'>
        <img src={img} alt='...'/>
        <div className='inside-tle'>
          <h3>BLOG</h3>
          <p>The No.1 Website grocery ordering and delivery services in Madurai, India</p>
        </div>
      </div>
    <section className="blog">
      <div className="img-1">
        {blog.length > 0 ? (
            blog.map((item, id) => {
            return (
              <Link to={`/blog/${item.id}`} className="img-1-cont">
                <img src={item.img} alt="..." />
                <p className="title">{item.title}</p>
                <p className="ans">{item.subcontent}</p>
                <Link to={`/blog/${item.id}`} className='read'>Read More</Link>
            </Link>
            )
          })) : 'Data Not Found'}
        </div>
      </section>

    </div>
  )
}

export default Blog

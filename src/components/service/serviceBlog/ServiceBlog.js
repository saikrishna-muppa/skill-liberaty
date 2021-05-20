import React from 'react'
import '../serviceBlog/ServiceBlog.css'
import AboutList from './aboutList/AboutList'
import FeaturedServices from './featuredservices/FeaturedServices'
const ServiceBlog = () => {
    return (
        <div className="service-blog-container">
          <div className="service-blog-header">
           <div>
             <img className="service-blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVb5zbFP1AFSA1ZpXviArPpZ_c6_dtLtlU-f50vS9mi1WT9FsSOCqU2MPXc5dWbb6zjg&usqp=CAU" alt="service-blog"/>
           </div>
           <div className="service-blog-text">
              <h3>
Having fun while learning is possible</h3>
<p>Lorem ipsum dolor sit amet adipisicing elit. Quae blanditiis porro facere qui impedit dolor doloribus</p>
<li>Learn Courses Online</li>
<li>Highly Qualified Teachers</li>
<li>Book Library & Stores</li>
<li>Apply for Scholarship</li>
<a className="blog-btn-secondary" href="#" >KNOW MORE</a>
           </div>
           </div>
           <AboutList/>
           <div className="featureservice-text"><h2>Featured Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
           <FeaturedServices/>
        </div>
    )
}

export default ServiceBlog

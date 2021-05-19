import React from 'react'
import './Blog.css'
import banner from '../../../images/banner.png'
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-text">
<h3>Join us for FREE to get instant email updates!</h3>
<h4>Subscribe and get notified at first on the latest update and offers!</h4>
<input type="text" placeholder="your email here" className="blog-input"/>
<a href="" className="banner-btn-parimary">Subscribe</a>
      </div>
      <div className="blog-image">
        <img src={banner} alt="blog"/>
      </div>
    </div>
  )
}

export default Blog

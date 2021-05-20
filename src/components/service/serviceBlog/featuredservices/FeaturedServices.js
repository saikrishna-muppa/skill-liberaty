import React,{useState} from 'react'
import '../featuredservices/FeaturedServices.css'
import {ImBook} from 'react-icons/im'
import {FaRegSmile} from 'react-icons/fa'
import {MdLaptop} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs'
import FeaturedServicesData from './FeaturedServicesData.json'
const FeaturedServices = () => {
    const [data, setData] = useState(FeaturedServicesData)
    return (
        <div className="feature-service-container" >
            
            {data.map((post,idx)=>{
                return(

                    <div className="feature-service-body" key={idx}>
                       <div className="feature-service-image-background">  {post.icon==='MdLaptop'?(<MdLaptop/>):post.icon==="FaRegSmile"?(<FaRegSmile/>):post.icon==='ImBook'?(<ImBook/>):post.icon==='BsFillPersonFill'?(<BsFillPersonFill/>):<MdLaptop/>}</div>
                        <a href="#" className="feature-service-title"> {post.title}</a>
                        <p className="feature-service-para" >{post.descrption} </p>
                        <a  className="banner-btn" href="#">Learn More</a>
                        </div>
                )
            })}
        </div>
    )
}

export default FeaturedServices

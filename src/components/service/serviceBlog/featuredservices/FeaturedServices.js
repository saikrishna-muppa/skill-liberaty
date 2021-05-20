import React,{useState} from 'react'
import '../featuredservices/FeaturedServices.css'
import FeaturedServicesData from './FeaturedServicesData.json'
const FeaturedServices = () => {
    const [data, setData] = useState(FeaturedServicesData)
    return (
        <div className="feature-service-container" >
            {data.map((post,idx)=>{
                return(

                    <div className="feature-service-body" key={idx}>
                       <div className="feature-service-image-background">   <img  className="feature-service-body-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVb5zbFP1AFSA1ZpXviArPpZ_c6_dtLtlU-f50vS9mi1WT9FsSOCqU2MPXc5dWbb6zjg&usqp=CAU"/></div>
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

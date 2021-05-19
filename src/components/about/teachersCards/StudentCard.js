import React, { useState } from 'react'
import data from '../teachersCards/Studentdata.json'
const StudentCard = () => {
    const [info,setInfo]=useState(data)
    return (
        <div className="student-card-container">
           {info.map((post,index)=>{
               return(
                   <div className="student-card">
                       <img src={post.image}/>
                       <h4>{post.title} </h4>
                       <h6>{post.qualification} </h6>
                       </div>
               )
           })} 
           
            
        </div>
    )
}

export default StudentCard

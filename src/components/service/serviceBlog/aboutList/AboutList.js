import React, { useState } from "react";
import "../aboutList/AboutList.css";
import {HiPhone} from 'react-icons/hi'
import AboutListData from './AboutListData.json'
const AboutList = () => {
   const [data,setData]=useState(AboutListData)

  return (
    <div className="about-list-container">
        <div className="about-list">
        {data.map((post,index)=>{
            return(
                
                <div className="about-list-header">
              
               <span> {post.icon}</span>
                <div className="about-list-header-title" > {post.title}</div> 
               <div  className="about-list-header-desc" >{post.descrption}</div>
               </div>
               
            )
        })}
       </div>
    </div>
  );
};

export default AboutList;
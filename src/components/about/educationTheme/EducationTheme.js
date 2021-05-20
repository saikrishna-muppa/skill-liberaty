import React,{useState} from 'react'
import EducationThemeData from './EducationThemeData.json'
import '../educationTheme/EducationTheme.css';
import {HiPhone} from 'react-icons/hi';
import {FaGraduationCap} from 'react-icons/fa';
import {GiBackwardTime} from 'react-icons/gi';
import {FaRegSmile} from 'react-icons/fa';  
import {HiUserGroup} from 'react-icons/hi';
const EducationTheme = () => {
    const [data, setData] = useState(EducationThemeData)
    return (
        <div className="education-theme-container">   
       
                 <div className="education-theme-header"  >
                 <h4>Welcome to the Professional Education Theme!</h4>
            {data.map((post,idx)=>{
                return(

                    <div className="education-theme-body">
                 <div className="education-theme-image-background">{post.icon==='FaRegSmile'?(<FaRegSmile/>):post.icon==="FaGraduationCap"?(<FaGraduationCap/>):post.icon==='GiBackwardTime'?(<GiBackwardTime/>):post.icon==='HiUserGroup'?(<HiUserGroup/>):<HiUserGroup/>}</div>
                        <a href="#" className="education-theme-title"> {post.title}</a>
                        <p className="education-theme-para" >{post.descrption} </p>
                        {/* <a  className="banner-btn" href="#">Learn More</a> */}
                        </div>
                )
            })}
            </div>
             <div>
          <img
            className="education-theme-side-image"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </div>
        
        </div>

    )
}

export default EducationTheme

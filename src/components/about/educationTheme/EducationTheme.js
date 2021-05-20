import React,{useState} from 'react'
import EducationThemeData from './EducationThemeData.json'
import '../educationTheme/EducationTheme.css'
const EducationTheme = () => {
    const [data, setData] = useState(EducationThemeData)
    return (
        <div className="education-theme-container">   
                 <div className="education-theme-header"  >
            {data.map((post,idx)=>{
                return(

                    <div className="education-theme-body">
                       <div className="education-theme-image-background">   <img  className="education-theme-body-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVb5zbFP1AFSA1ZpXviArPpZ_c6_dtLtlU-f50vS9mi1WT9FsSOCqU2MPXc5dWbb6zjg&usqp=CAU"/></div>
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

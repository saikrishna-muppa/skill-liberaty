import React from 'react'
import '../footer/Footer.css'
import icon from '../../images/footer-icon.png'
import RecentPost from './RecentPost'
import SocialIcons from './SocialIcons'
 const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer-container">
            <div className="footer-header">
            <a href="#" className="footer-skill"><img src ={icon}/  > Skill</a>
              {/* <div className="footer-skill-text">We amplify important ideas in mathematics education to help teachers grow their practice and our profession. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
              </div>

            <div className="footer-header"> <h4>Explore more</h4>
                           
               <li className="list-text" >Gallery</li>
                <li className="list-text">Courses</li>
                <li className="list-text">Landing Page</li>
                <li className="list-text">Apply Now</li>
                <li className="list-text">Buy Course Online</li>
               
            </div>


            <div className="footer-header"><h4> Recent Post</h4>
           <div>
            <RecentPost/>
            <RecentPost/>
            <RecentPost/>

            </div>
            </div>
            <div className="footer-header"><h4>Quick Links</h4>
           
           <li className="list-text" >Home</li>
           <li className="list-text">About</li>
           <li className="list-text">Services </li>
           <li className="list-text">Blog</li>
           <li className="list-text">Contact</li>
      
       </div>
        </div>
        <SocialIcons/>
        </div>
    )
}
export default Footer
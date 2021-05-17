import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {ImGooglePlus} from 'react-icons/im'
import {AiOutlineTwitter}  from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai' 
import {TiSocialYoutubeCircular} from 'react-icons/ti'
const SocialIcons=()=> {
    return (
        <div>
        <div className="social-icons">
         <a href="#">   <FaFacebookF/></a>
         <a href="#"><ImGooglePlus/></a>
            <a href="#"><AiOutlineTwitter/></a>
            <a href="#"><AiOutlineInstagram/></a>
            <a href="#"><TiSocialYoutubeCircular/></a>
        </div>
      <p>  © 2020 Skill. All Rights Reserved | Design by W3Layouts</p>
        </div>
    )
}
export default  SocialIcons
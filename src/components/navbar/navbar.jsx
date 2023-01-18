import {BsFacebook,BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {MdOutlineRestaurantMenu,MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom/dist'
import './navbar.scss'
import { useNavigate } from 'react-router-dom/dist'
import { useState } from 'react'
function Navbar(){
  const navigate = useNavigate()
  const location = useLocation();
  const [expanded, setExpanded]=useState()

  return  (    
    <> 
      
    <div className={`navbar `}>

    <div className={`restau ${location.pathname==='/restaurants' ? 'selected' : ''}`}  onClick={()=>navigate('/restaurants')} > 
    <MdOutlineRestaurantMenu size={25} /> 
         <h4 >Nos restaurants </h4>
</div>

      <div className={`socials`}>
        
      <a href='https://www.instagram.com/awidquick/'  target="_blank"  ><BsInstagram size={20} /></a>
    <a href='https://www.facebook.com/AwidQuick'  target="_blank" ><BsFacebook size={20}/></a>
      </div>
    
    <div className={`links`}>
 
      <h4><a href="mailto: contact@awidquick.com"   target="_blank">contact@awidquick.com</a></h4>
    <h4><a href="https://api.whatsapp.com/send/?phone=212661461262&text&type=phone_number&app_absent=0" target={'_blank'}>+212 661 46 1262</a></h4>
    </div>
    
   <img src="/images/greenlogo.png" alt="" className={`greenlogo ${expanded?'expanded': ''}`} onClick={()=>{navigate('/')}}  />
    
    
   </div> 
   <span className='navmenu' onClick={()=>{setExpanded(!expanded)}}>{expanded? <AiOutlineClose size={25} fill={'white'}/>:<GiHamburgerMenu size={25} fill={'white'}/>}</span>
  
   <div className='mobilenavbar'  data-visible={expanded ?'true' : 'false'}>

   <div  style={{display : 'flex', gap : '1rem'}}  onClick={()=>navigate('/restaurants')} > 
    <MdOutlineRestaurantMenu size={20} /> 
         <h4 >Nos restaurants </h4>
         </div>
          <div style={{display : 'flex', gap : '1rem'}}  onClick={()=>window.open('https://www.instagram.com/awidquick/', '_blank')}>
          <a href=''  ><BsInstagram size={20} /> </a><h4>Instagram</h4>
          </div>
          <div style={{display : 'flex', gap : '1rem'}} onClick={()=>window.open('https://www.facebook.com/AwidQuick','_blank')}>  
            <a href='https://www.facebook.com/AwidQuick'  ><BsFacebook size={20}/> </a> <h4>Facebook</h4>
      </div>
        <div style={{display : 'flex', gap : '1rem'}} onClick={()=>window.open('mailto: contact@awidquick.com','_blank')}>      
          <a href=""><MdEmail size={20}/></a><h4>contact@awidquick.com</h4>
      </div>
      <div style={{display : 'flex', gap : '1rem'}} onClick={()=>window.open('https://api.whatsapp.com/send/?phone=212661461262&text&type=phone_number&app_absent=0','_blank')}>     
        <a href=''><BsWhatsapp size={20}/></a><h4>+212 661 46 1262</h4>
      </div>

   
    </div> 
   <div className="shape-divider3">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
    </svg>
    </div>
    
    </>)

    
   
}

export default Navbar
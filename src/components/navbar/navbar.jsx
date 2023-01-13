import {BsFacebook,BsInstagram} from 'react-icons/bs'
import './navbar.scss'
import { useNavigate } from 'react-router-dom/dist'
function Navbar(){
  const navigate = useNavigate()
  
    return  (    
    <> 
    <div className='contact'>
    <a href='https://www.instagram.com/awidquick/' className='socials'><BsInstagram size={20}/></a>
    <a href='https://www.facebook.com/AwidQuick' className='socials'><BsFacebook size={20}/></a>
    <div className="links">
      <h4><a href="mailto: contact@awidquick.com"   target="_blank">contact@awidquick.com</a></h4>
    <h4><a href="https://api.whatsapp.com/send/?phone=212661461262&text&type=phone_number&app_absent=0" target={'_blank'}>+212 661 46 1262</a></h4>
    </div>
    
   <img src="/images/greenlogo.png" alt="" className='greenlogo animate__animated animate__pulse animate__delay-3s animate__slower' onClick={()=>{navigate('/')}}  />
   </div> 
   <div className="shape-divider3">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
    </svg>
    </div></>)

    
   
}

export default Navbar
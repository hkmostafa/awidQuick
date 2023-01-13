import './footer.scss';
import AwidMap from '../map/map'
import {BsFacebook,BsInstagram} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom/dist';


function Footer(){
  const navigate = useNavigate()

    return(
        <div className="footer">
        <div className='footer-left'>
        <img src="/images/greenlogo.png" alt="" onClick={()=>{navigate('/')}}/>
         <div className='download'>
           <img src="/images/googleplay.png" alt="" />
           <img src="/images/appstore.png" alt="" />
         </div>
        </div>
         <div className='footer-center'> 
         <div>
            <h3>CONTACTER NOUS</h3>  
           <h4>contact@awidquick.com</h4>
           <h4>+212 661 46 1262</h4>
           <h4>AGADIR, MAROC</h4></div>
          
           <div>
           <h3>SUIVEZ NOUS</h3>
           <a href='https://www.instagram.com/awidquick/' className='socials' ><BsInstagram size={20}/><h4>Instagram</h4></a>
           <a href='https://www.facebook.com/AwidQuick' className='socials'><BsFacebook size={20}/><h4>Facebook</h4></a>
           </div>
           
         </div>
       
         <div className='footer-right'><AwidMap/></div>
         </div> 
         
    )
}

export default Footer
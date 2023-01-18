import './home.scss';
import 'animate.css';
import { useState,useRef, useEffect} from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import Ads from '../../components/carousel/carousel';
import {BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs'

function Home(){
    const openWhatsapp = ()=>{
        window.open('https://api.whatsapp.com/send/?phone=212661461262&text&type=phone_number&app_absent=0')
    }
    const steps = useRef()
    const [stepsVisible, setStepsVisible]=useState();
    console.log(stepsVisible);
    useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
        const entry = entries[0];
       
        if (entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            setStepsVisible(true);
          }
          else{
            setStepsVisible(false)
          }
      }})
      observer.observe(steps.current);
      return () => {
        if(steps.current){  observer.unobserve(steps.current);
        }
      };
    },[stepsVisible])
    return(
    <div className="App">

      
      <div className='banner'>
      <img src="/images/awidquick.png" alt=""  className='logo animate__animated animate__lightSpeedInLeft' />
      
        <div className='banner-text '>
          <h2 className='secondaryTitle  animate__animated animate__pulse animate__delay-1s animate__slower	 animate__infinite	'>
          LIVRAISON DES COMMANDES À DOMICIEL OU AU TRAVAIL 24H/24H
          </h2>
         
        </div>
      
      </div>
      <div className="shape-divider1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
  </div>
      <div className='steps' ref={steps}>
        <div  className={`step  ${stepsVisible?'  shown':''}`}>
          <h4>Etape 1</h4>
          <h2>Choisir</h2>
        </div>
        <span className={`arrow ${stepsVisible?'  shown':''}`}> <BsFillArrowRightCircleFill fill='#3fc851' size={50}/></span>
        <span className={`arrowmobile ${stepsVisible?'  shown':''}`}> <BsFillArrowDownCircleFill fill='#3fc851' size={50}/></span>

        <div  className={`step ${stepsVisible?'  shown':''}`}>
          <h4>Etape 2</h4>
          <h2>Demander</h2>
        </div>
        <span className={`arrow ${stepsVisible?'  shown':''}`}> <BsFillArrowRightCircleFill fill='#3fc851' size={50}/></span>
        <span className={`arrowmobile ${stepsVisible?'  shown':''}`}> <BsFillArrowDownCircleFill fill='#3fc851' size={50}/></span>

        <div  className={`step  ${stepsVisible?'  shown':''}`}>
          <h4>Etape 3</h4>
          <h2>Recevoir</h2>
        </div>
      </div>
      <div className="shape-divider2">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
    </div>
      <div className='command'>
        <div>
          
          <h2>Livraison Express</h2>
          <h4>Recevez vos commandes en un rien de temps avec notre service de livraison rapide</h4>
          <div className='animate__animated animate__headShake animate__delay-5s animate__slower  animate__infinite'><button onClick={openWhatsapp} className="">Commander 
          <MdOutlineShoppingCart fill='#389b44' fontWeight={900}/>
          </button></div>
          
        </div>
       <div className="carousel"><Ads/> </div>
          
      </div> 
     
        <div className='servicesSection'>
          <div><h2 className='secondaryTitle' style={{paddingTop : 50}}>
        Nos specialités
          </h2> 
          <h4>Plus de temps perdu à faire les courses, commandez en ligne et faites-vous livrer à domicile</h4></div>
        
          <div className='services'>
            <div className="service">
              <h4>Food</h4>
              <h5>Consultez nos menus et choisissez ce que vous désirez</h5>
            </div>
            <div className="service">
              <h4>Courses</h4>
              <h5>Nous vous apporterons toutes les courses dont vous avez besoin</h5>

              </div>
            <div className="service">
              <h4>Cadeaux</h4>
              <h5>choisissez un cadeau pour votre bien-aimé</h5>

              </div>
          </div>
        </div>
        <div className="delivery">
          <img src='/images/livreur.jpg'/>
          <div className='delivery-text'>
            <h2>Toujours à votre service !</h2>
          <h4>Notre équipe est dédiée à assurer la satisfaction de nos clients en veillant à ce que chaque colis soit livré en toute sécurité et à temps. </h4>
          </div>
          
      </div>
        
  
    </div>
    )
}

export default Home
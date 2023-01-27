import axios from 'axios'
import { useEffect, useState } from 'react';
import './restaurants.scss';
import {GrFormClose} from 'react-icons/gr';
import Modal from 'react-modal';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Menus from '../../components/carousel/menuCarousel';
function Restaurants(){
    const [restaurants, setRestaurants] = useState();
    const [menu, setMenu]= useState([]);
    const [currentRestau, setCurrentRestau ]= useState(null);
    const [MenuIsOpen, SetMenuIsOpen] = useState(false);
    const [paginate, setPaginate]=useState(8)
    const loadMore = (e) => {
      setPaginate((prevValue) => prevValue + 8);
    };

    function openMenu(restau) {
        SetMenuIsOpen(true);
        setCurrentRestau(restau)
        getMenus(restau.id)
      }
    function closeModal() {
        SetMenuIsOpen(false);
      }
    
    async function getRestaurants(){
        const restaurants =  await axios.get('http://165.22.116.57:3000/restaurant/restaurantVitrine');
        setRestaurants(restaurants.data);
    }
    
    async function getMenus(id){
        const menus= await axios.get(`http://165.22.116.57:3000/menueVitrine/${id}`)
        setMenu(menus.data)
    }
    useEffect(()=>{
      Modal.setAppElement('body');
        getRestaurants();
    },[])

    return(
      <>
      <Navbar/>
        <div className="container">
            <div className='title_container'>
            <h3>Découvre nos restaurants </h3>
            
           
            </div>
            <div className="cards_container">
                {restaurants && restaurants.slice(0,paginate).map((restau)=>{
                    return(   <div className="restaucard" key={restau.id} onClick={()=>openMenu(restau)} >
                    <img src={`http://165.22.116.57:3000/${restau.logo}`} className='restaulogo' />
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restau.banner}`}/>
                    
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>)
                
                })
              }
               
            </div>
            {currentRestau  &&   <Modal
        isOpen={MenuIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false} 
        contentLabel="Menu"
        className={'menu'}
      >   
    
        <span className='closebutton' onClick={closeModal}><GrFormClose size={30} /></span>
        <Menus menu={menu}/>

           
      </Modal>}
        {restaurants>6 &&
         <button className='loadmore'  onClick={loadMore}>Afficher plus ...</button>
        }
       
        </div> 
      <Footer/>
      </>
    )
}

export default Restaurants
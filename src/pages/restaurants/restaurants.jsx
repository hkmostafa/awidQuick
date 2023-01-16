import axios from 'axios'
import { useEffect, useState } from 'react';
import './restaurants.scss';
import {GrFormClose} from 'react-icons/gr'
import Modal from 'react-modal';
function Restaurants(){

    const [restaurants, setRestaurants] = useState();
    const [MenuIsOpen, SetMenuIsOpen] = useState(false);
    
    function openMenu() {
        SetMenuIsOpen(true);
      }
    function closeModal() {
        SetMenuIsOpen(false);
      }
    
    async function getRestaurants(){
        const restaurants =  await axios.get('http://165.22.116.57:3000/restaurant/restaurantVitrine');
        setRestaurants(restaurants.data);


    }
    useEffect(()=>{
        getRestaurants();
    },[])
    console.log(restaurants)
    return(
        <div className="container">
            <div className='title_container'>
            <h3>Decouvre nous restaurants </h3>
            </div>
            <div className="cards_container">
                {restaurants && 
                   <div className="restaucard"  onClick={openMenu} >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo' />
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
               
            </div>
            <Modal
        isOpen={MenuIsOpen}
        onRequestClose={closeModal}

        contentLabel="Menu"
        className={'menu'}
      > 
        <span className='closebutton' onClick={closeModal}><GrFormClose size={30} /></span>

        {restaurants && <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>   }  
      </Modal>
      
        </div>  
    )
}

export default Restaurants
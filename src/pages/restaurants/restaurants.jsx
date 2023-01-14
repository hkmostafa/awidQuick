import axios from 'axios'
import { useEffect, useState } from 'react';
import './restaurants.scss'

function Restaurants(){

    const [restaurants, setRestaurants] = useState();

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
            <h3>Decouvre nous restuarants </h3>
            </div>
            <div className="cards_container">
                {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    <div className="gradient"></div>
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    <div className="gradient"></div>
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    <div className="gradient"></div>
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    <div className="gradient"></div>
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
                      {restaurants && 
                   <div className="restaucard" >
                    <img src={`http://165.22.116.57:3000/${restaurants[0].logo}`} className='restaulogo'/>
                    <div className='bannertext'> 
                        <img src={`http://165.22.116.57:3000/${restaurants[0].banner}`}/>
                    <div className="gradient"></div>
                  <h4>{restaurants[0].nom}</h4>
                  
                    </div>
                </div>
                }
               
            </div>
        </div>  
    )
}

export default Restaurants
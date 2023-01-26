import './map.scss'
import ReactMapGL, {Marker,Popup} from "react-map-gl";
import {MdLocationPin} from 'react-icons/md'
import {  useState } from "react";
function AwidMap() {
    const [showPopup, setShowPopup] = useState(false);
    const onChangePopup = (e) => {
        e.stopPropagation();
        setShowPopup(!showPopup);
    }
    
    
    return     <ReactMapGL
    initialViewState={{
              latitude: 30.3987125,
              longitude:  -9.5622969,
              zoom: 12
            }}

            
       mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken  = "pk.eyJ1IjoiamVlenphcyIsImEiOiJjbDNyYmtjbjYwNnZoM2NvMDluczhhcHFrIn0.LTXCT43tTenja5zSBBThbg"
    minZoom={11}
    maxZoom={15}
    doubleClickZoom={false}
    style={{borderRadius : 10, boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
    }}
    >
    <Marker key="1" latitude={'30.3987125'} longitude={'-9.5622969'} anchor="center" >
    <button  style={{border : 'none',background: 'transparent',cursor:'pointer'}} onClick={onChangePopup}><MdLocationPin size={40}  fill="#3fc851"/></button>
    </Marker>
    {showPopup &&  <Popup latitude={'30.3987125'} longitude={'-9.5622969'}
        anchor="bottom"
        className='popup'
        closeOnClick={true}
        offset={20}
        onClose={() => setShowPopup(false)}>
        <a href="https://www.google.com/maps?ll=30.40878,-9.5601&z=11&t=m&hl=en-US&gl=US&mapclient=embed&q=9CXQ%2BF3P+Agadir@30.3987125,-9.5622969" target={"_blank"} >Afficher dans Google maps</a>
      </Popup>}
   
   
        
    </ReactMapGL>  

  
}

export default AwidMap
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Menus (props) {
        
        return (
            
            <Carousel showArrows={true} 
            autoPlay={false}  
            showStatus={false}
            infiniteLoop={true}
            showIndicators={false} 
            showThumbs={false}
            thumbWidth={200}
            stopOnHover={true}
            
             >

                {props.menu && props.menu.map((menu)=>{return <img style={{position : 'relative', top : '50%', right :'50%', transform : 'translate(-50%, -50%)', maxHeight :'450px'
            }} src={`http://165.22.116.57:3000/${menu.section}`} key={menu.id}/>  })}

            

            </Carousel>
        );
    }
;

export default Menus

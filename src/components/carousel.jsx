import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Ads () {
    
        return (
            <Carousel showArrows={true} 
            autoPlay={true}  
            infiniteLoop={true}
            showIndicators={false} 
            showThumbs={false}
            thumbWidth={200}
            stopOnHover={true}
             >
                <div>
                    <img src="/images/img.jpg"/>
                    
                </div>
                <div>
                    <img src="/images/img.jpg" />
                  
                </div>
                <div>
                    <img src="/images/img.jpg" />
                  
                </div>
            </Carousel>
        );
    }
;

export default Ads

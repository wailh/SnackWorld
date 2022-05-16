import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './css/Hero.module.css'

const Hero = () => {
    return ( 
        <div className={classes['hero-container']}>
            <Carousel 
                className={classes.hero}
                autoPlay
                infiniteLoop
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
            >
                <img src="food/2.jpg" />
                <img src="food/3.jpg" />
                <img src="food/4.jpg" />
            </Carousel>
            <div className={classes.description}>
                 <h1>At SnackWorld</h1>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit sequi eveniet, praesent
                    ium laboriosam ad amet neque dolorum quae esse minus quaerat temporibus veritatis earum 
                    tempora illo quisquam, rem, ex ab.</p>
            </div>
        </div>
     );
}
 
export default Hero;
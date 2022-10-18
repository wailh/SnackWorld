import classes from './css/Footer.module.css'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'


const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes['img-container']}>
                <img src='food/chinese.jpg'></img>
            </div>
            <div className={classes.info}>
                <h2>SnackWorld Chinese Restaurant</h2>
                <p>Fengtai district, Beijing, China </p>
                <p>(+213) 589-654-123</p>
                <p>Email: wail.info21@gmail.com</p>
                <div className={classes.social}>
                   <BsFacebook />
                   <BsTwitter />
                   <BsInstagram />
                </div>
            </div>
            <div className={classes.hours}>
                <h2>Hours</h2>
                <h3>Monday - Thursday</h3>
                <p>11:30 am - 3:00 pm</p>
                <p>5:00 pm to 9:00 pm</p>
                <h3>Friday - Sunday</h3>
                <p>11:30 am - 3:00 pm</p>
                <p>5:00 pm to 10:00 pm</p>
            </div>

        </div>
     );
}
 
export default Footer;

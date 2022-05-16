import classes from './css/Navbar.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state) => state.cart.list)
    const cartTotal = cart.reduce((a,b) => a + b.qty, 0)


    return ( 
        <div className={classes.navbar}>
            <div className={classes['logo-box']}>
               <div>
                    <div className={classes.logo}><span>snack</span>world</div>
                    <span className={classes['logo-subtitle']}>pecto&ap</span>
                </div>
           </div>
            <div className={classes.list}>
                <ul>
                    <li>
                        <RouterLink to="/">home</RouterLink>
                    </li>
                    <li>
                       <Link to="menu" spy={true} smooth={true}>
                           menu
                       </Link>
                    </li>
                    <li>
                       <Link to="contact" spy={true} smooth={true} >
                           contact
                       </Link>
                    </li>
                </ul>
            </div>
            <div className={classes.cart}>
              <RouterLink to="/cart">
                <AiOutlineShoppingCart />
                <span className={classes.circle}>{cartTotal}</span>
              </RouterLink>
            </div>
        </div>
     );
}
 
export default Navbar;
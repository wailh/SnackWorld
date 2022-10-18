import classes from './css/MenuProduct.module.css'
import { Link as RouterLink } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MenuProduct = ({product}) => {
    const {id, desc, img, price, name} = product
    return ( 
        <div className={classes.menuProduct}>
             <div className={classes['img-container']}> 
                  <img src={img} className={classes.img}/>
             </div>
             <h4>{name}</h4>
             <div className={classes.price}>
                <RouterLink to='/orderPage' state={ product }>
                  <span className={classes.button}>Order Now</span>
                </RouterLink>
                 <span className={classes.value}>¥{price}</span>
             </div>
        </div>
     );
}
 
export default MenuProduct;

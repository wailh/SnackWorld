import classes from './css/DetailContent.module.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { itemAdded } from "../store/cart";

const DetailContent = () => {
    const [amount, setAmount] = useState(0)
    const location = useLocation()
    const item = location.state
    const {id, desc, img, price, name} = item;

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    return ( 
        <div className={classes.detail}>
            <div className={classes['product-left']}>
               <img src={img}></img>
            </div>
            <div className={classes['product-right']}>
                <h1 className={classes.title}>{name}</h1>
                <span className={classes.price}>${price}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, accusamus! Labore enim, impedit numquam tempore atque, debitis ipsam expedita officiis aut, minus unde reprehenderit placeat esse tempora quisquam architecto consequuntur.</p>
                <div className={classes.amount}>
                    <label htmlFor="amountValue">Amount</label>
                    <input id="amountValue" onChange={(e) => handleChange(e)} value={amount} type="number" step="1" name="amountValue" min="1" max="5"  />
                    <span className={classes.addToCart} onClick={() => dispatch(itemAdded({item, amount}))}>Add to Cart</span>
                </div>
            </div>
        </div>
     );
}
 
export default DetailContent;

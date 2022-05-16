import classes from '../css/Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
// import { getTotalPrice } from './../../store/cart';
import { clearCart } from '../../store/cart'

const CartLeft = ({ handleCheckOut }) => {
    const items = useSelector((state) => state.cart.list)
    const dispatch = useDispatch()
    const taxRate = 0.05
    const Total = items.reduce((a,b) => a + b.qty * b.price, 0)
    const Tax = Total * taxRate

    return ( 
        <div className={classes['cart-left']}>
            <h3>cart total</h3>
            <div>
                <p>subtotal: </p>
                <span>${Total.toFixed(2)}</span>
            </div>
            <div>
                <p>tax: </p>
                <span>${Tax.toFixed(2)}</span>
            </div>
            <div>
                <p>order total: </p>
                <span>${(Total + Tax).toFixed(2)}</span>
            </div>
            <span className={classes['check-out']} onClick={() => handleCheckOut()}>CheckOut</span>
            <span className={classes['clear-cart']} onClick={() => dispatch(clearCart())}>Clear Cart</span>
        </div>
     );
}
 
export default CartLeft;
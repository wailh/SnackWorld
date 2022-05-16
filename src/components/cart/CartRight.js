import classes from '../css/Cart.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { itemDeleted } from '../../store/cart'

const CartRight = ({cartItems}) => {

    const dispatch = useDispatch()

    return ( 
        <div className={classes['cart-right']}>
            <div className={classes.table}>
                <div className={classes['table-header-box']}>
                    <div className={classes['table-title']}>name</div>
                    <div className={classes['table-title']}>price</div>
                    <div className={classes['table-title']}>quantity</div>
                    <div className={classes['table-title']}>total</div>
                </div>
                <div className={classes['table-row-box']}>
                  {
                    cartItems.map(item => (
                    <div  className={classes['table-row-container']} key={item.id}>
                        <div className={classes['table-row']}>
                           <p>{item.name}</p>
                           <span onClick={() => dispatch(itemDeleted(item))} style={{cursor: 'pointer'}}>
                                <BsFillTrashFill />
                           </span>
                        </div>
                        <div className={classes['table-row']}>${item.price}</div>
                        <div className={classes['table-row']}>{item.qty}</div>
                        <div className={classes['table-row']}>${(item.qty * item.price).toFixed(2)}</div>
                    </div>
                 ))
                 }
                </div>
            </div>
        </div>
     );
}
 
export default CartRight;
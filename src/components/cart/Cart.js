import { useState } from 'react'
import CartRight from './CartRight'
import CartLeft from './CartLeft'
import classes from '../css/Cart.module.css'
import FormValidation from './../FormValidation';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const [showForm, setShowForm] = useState(false)
    const cartItems = useSelector((state) => state.cart.list)

    const handleCheckOut = () => {
        setShowForm(true)
    }
    const handleOrderSubmited = () => {
        setShowForm(false)
    }

    return (
        <>
            { cartItems.length > 0 ?
                <div className={classes.cart}>
                    <>
                        <CartRight cartItems={cartItems}/>
                        <CartLeft handleCheckOut={handleCheckOut} />
                    </>
                </div>
                    :
                <h1 className={classes.title}>There are no items in the cart</h1>
            }
            {showForm 
              ?
                <FormValidation handleOrderSubmited={handleOrderSubmited}/>
              :
                <></>
            }
        </>
    )
}

export default Cart;
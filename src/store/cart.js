import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {list: []},
    reducers: {
      itemAdded: (cart, action) => {
          const {item, amount} = action.payload
          let alreadyExists = false;
          cart.list.forEach((x) => {
              if (x.id === item.id) {
                  alreadyExists = true;
                  x.qty = parseFloat(amount)
              }
          })
          if (!alreadyExists) {
              if (amount > 0)
                cart.list.push({...item,  "qty" : parseFloat(amount)})
          }
          },
          itemDeleted: (cart, action) => {
            cart.list = cart.list.filter((item) => item.id !== action.payload.id)
          },
          clearCart: (cart, action) => {
              cart.list = []
          }
    }
})

export const {
    itemAdded,
    itemDeleted,
    clearCart
} = cartSlice.actions
export default cartSlice.reducer;


// export const getTotalPrice = (userId) =>
//   createSelector(
//     (state) => state.cart.list.reduce((a, b) => (a.qty * a.price + b.qty * b.price))
//   );

import { configureStore } from '@reduxjs/toolkit'
import api from './middleware/api'
import productsReducer from './products'
import cartReducer from './cart'

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => 
          getDefaultMiddleware().concat(api)
})

export default store
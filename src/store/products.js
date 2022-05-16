import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiCallBegan } from './api' 

const productsSlice = createSlice ({
    name: 'products',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        productsRequested: (products, action) => {
            products.loading = true
        },
        productsReceived: (products, action) => {
            products.list = action.payload
            products.loading = false
        },
        productsRequestFailed: (products, action) => {
            products.loading = false
        }
    }
})

export const { 
    productsReceived,
    productsRequested,
    productsRequestFailed
} = productsSlice.actions
export default productsSlice.reducer;

export const loadProducts = (url) => (dispatch, getState) => {
dispatch(
        apiCallBegan({
            url,
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type,
        })
    ) 
}

export const getProducts = 
      createSelector(state => state.products.list) 

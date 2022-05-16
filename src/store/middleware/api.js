import { useState } from 'react'
import axios from 'axios'
import * as actions from '../api'
import store from '../store'

const api = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action)

    const { url, method, data, onStart, onSuccess, onError } = action.payload
    
    if (onStart) dispatch({ type: onStart})
    next(action)

    try {
        const res = await axios.request({
            baseURL: 'https://ig-food-menus.herokuapp.com',
            url,
            method,
            data
        })
        dispatch(actions.apiCallSuccess(res.data))
        
        if (onSuccess) {
            dispatch({ type: onSuccess, payload: res.data})
        }
    }   catch (error) {
        dispatch(actions.apiCallFailed(error.message))

        if (onError) dispatch({ type: onError, payload: error.message})
    }
}

export default api;
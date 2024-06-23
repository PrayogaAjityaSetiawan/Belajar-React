import {configureStore, createAction, createReducer} from "@reduxjs/toolkit"

const addToCart = createAction("ADD_TO_CART")

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})
console.log(store.getState())

// Subscribe
// Subscribe untuk melihat perubahan yang terjadi didalam store
store.subscribe(() => {
    console.log("STORE CHANGED",store.getState())
})


store.dispatch(addToCart({id : 1, qty : 1}))

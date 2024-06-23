import { legacy_createStore } from "redux"

// Reducer
const cartReducer = (state = {
    cart : [{id: 1, qty: 1}],
}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart : [...state.cart, action.payload],
            }
            default:
                return state
    }
}
// Store
// Store untuk menyimpan state
const store = legacy_createStore(cartReducer)
console.log(store.getState())


// Subscribe
// Subscribe untuk melihat perubahan yang terjadi didalam store
store.subscribe(() => {
    console.log("STORE CHANGED",store.getState())
})

// Dispatch
const action1 = { type : "ADD_TO_CART", payload: {id: 2, qty: 20} }
store.dispatch(action1)


import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : [],
    reducers : {
        addToCard(state,action) {
            state.push(action.payload)
        }
    }
})

// Store
const store = configureStore({
    reducer : {
        cart : cartSlice.reducer
    }
})

console.log(store.getState())

// Subscribe
// Subscribe untuk melihat perubahan yang terjadi didalam store
store.subscribe(() => {
    console.log("STORE CHANGED",store.getState())
})

store.dispatch(cartSlice.actions.addToCard({id: 1, qty: 20}))


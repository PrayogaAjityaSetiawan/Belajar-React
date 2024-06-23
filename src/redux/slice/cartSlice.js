import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        data: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        // Untuk Menambahkan Data data kedalam Local Storage
        addToCart: (state, action) => {
            const itemAddCart = state.data.find(item => item.id === action.payload.id)
            if(itemAddCart){
                itemAddCart.qty++
                return
            }else{
                state.data.push(action.payload)  
            }
        },
        // Untuk Mengurangi Jumlah Barang Pada Keranjang
        decreesItem: (state, action) => {
            const itemAddCart = state.data.find(item => item.id === action.payload.id);
            if (itemAddCart) {
                if (itemAddCart.qty > 1) {
                    itemAddCart.qty--;
                } else {
                    state.data = state.data.filter(item => item.id !== action.payload.id);
                    localStorage.setItem("cart", JSON.stringify(state.data))
                }
            }
        },
        // Untuk Menambah Jumlah Barang Pada Keranjang
        increesItem: (state, action) => {
            const itemAddCart = state.data.find(item => item.id === action.payload.id);
            if (itemAddCart) {
                itemAddCart.qty++;
                localStorage.setItem("cart", JSON.stringify(state.data))
            }
        },
        // Untuk Menghapus data didalam Local Storage
        removeItem : (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id)
            localStorage.setItem("cart", JSON.stringify(state.data))
        }
    }
})

export const {addToCart , decreesItem, increesItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


initialCartState = {
    items:{
        name:'',
        quantity:0,
        price:0,
        totalPrice:0,
    },
    totalAmount:0.0,
};

const cartSlice = createSlice({
    name:'cart',
    initialCartState,
    reducers:{
        
    }
});
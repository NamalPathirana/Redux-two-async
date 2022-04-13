import { createSlice } from "@reduxjs/toolkit";


initialCartState = {
    items:[{
        name:'',
        quantity:0,
        price:0,
        totalPrice:0,
    }],
    totalAmount:0.0,
};

const cartSlice = createSlice({
    name:'cart',
    initialCartState,
    reducers:{
        addItemToCart(state,actions){
            if (actions.payload === null) return;

            if(state.items.includes(actions.payload.items)){

            }

           // state.items
        }
    }
});
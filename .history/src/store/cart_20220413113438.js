import { createSlice } from "@reduxjs/toolkit";


initialCartState = {
    items:[{
        id:0,
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

            if (actions.payload.item === null) return;

            const userEnteredItem = actions.payload.item;

            const existingItem = state.items.find((item)=>item.id === userEnteredItem.id);

            if(existingItem){
                
            }

           // state.items
        }
    }
});
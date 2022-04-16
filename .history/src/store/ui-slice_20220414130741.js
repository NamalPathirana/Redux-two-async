import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    cartIsVisible:false
}

const UISlice = createSlice({
    name:'ui',
    initialState:initialUIState,
    reducers:{
        toggle(state){
            state.cartIsVisible = !cartIsVisible;
        }
    }
});

export const UIActions = UISlice.actions;

export default UISlice;
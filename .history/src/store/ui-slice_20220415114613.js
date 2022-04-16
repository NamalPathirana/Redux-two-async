import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    cartIsVisible:false
    notification:null,
}

const UISlice = createSlice({
    name:'ui',
    initialState:{initialUIState},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const UIActions = UISlice.actions;

export default UISlice.reducer;
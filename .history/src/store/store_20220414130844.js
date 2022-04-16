import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import UISlice from "./ui-slice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        ui:UISlice,
    },
});


export default store;
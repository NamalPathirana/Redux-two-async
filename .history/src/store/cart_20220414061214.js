import { createSlice } from "@reduxjs/toolkit";

// itemsTemplate = {items: [
//     {
//       id: 0,
//       name: "",
//       description: "",
//       quantity: 0,
//       price: 0,
//       totalPrice: 0,
//     },
//   ],}

const initialCartState = {
  items: [
  ],
  totalAmount: 0.0,
  totalItems:0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, actions) {
      if (actions.payload.item === null) return;

      const userEnteredItem = actions.payload.item;

      const existingItem = state.items.find(
        (item) => item.id === userEnteredItem.id
      );

      if (existingItem) {
        const itemQuantity = existingItem.quantity+1;

        const newItem = { ...existingItem, quantity: itemQuantity };
        const newItemsList = [
          ...state.items.filter((obj) => obj.id !== newItem.id),
          existingItem,
        ];

        state.items = newItemsList;
      } else {
        state.items.push({
          id: userEnteredItem.id,
          name: userEnteredItem.name,
          description: userEnteredItem.description,
          quantity: userEnteredItem.quantity,
          price: userEnteredItem.price,
          totalPrice: userEnteredItem.price * userEnteredItem.quantity,
        });
      }

      state.totalItems = state.items.reduce((previousValue,currentItem)=>{return previousValue+currentItem.quantity},0);

      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
      }, 0);
    },
    increaseQuantity(state,actions){
      const existingItem = state.items.find(
        (item) => item.id === actions.payload.id
      );
      const newItemQuantity = existingItem.quantity + 1;
      const newItemTotalPrice = existingItem.price * newItemQuantity;
      const newItem = {...existingItem,quantity:newItemQuantity,totalPrice:newItemTotalPrice};
      const newItemList = [...state.items.filter((item)=>{ return item.id!==existingItem.id}),newItem];
      state.items = newItemList;

      state.totalItems = state.items.reduce((previousValue,currentItem)=>{return previousValue+currentItem.quantity},0);
      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
      }, 0);
      
    },
    decreaseQuantity(state,actions){

      const existingItem = state.items.find(
        (item) => item.id === actions.payload.id
      );


      let newItemQuantity;

      if(existingItem.quantity>0)
      newItemQuantity = existingItem.quantity - 1;
      else
      newItemQuantity = 0;


      const newItemTotalPrice = existingItem.price * newItemQuantity;
      const newItem = {...existingItem,quantity:newItemQuantity,totalPrice:newItemTotalPrice};
      const newItemList = [...state.items.filter((item)=>{ return item.id!==existingItem.id}),newItem];
      state.items = newItemList;

      state.totalItems = state.items.reduce((previousValue,currentItem)=>{return previousValue+currentItem.quantity},0);
      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
      }, 0);

    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

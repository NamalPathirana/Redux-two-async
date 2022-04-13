import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [
    {
      id: 0,
      name: "",
      description:"",
      quantity: 0,
      price: 0,
      totalPrice: 0,
    },
  ],
  totalAmount: 0.0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState:initialCartState,
  reducers: {
    addItemToCart(state, actions) {
      if (actions.payload.item === null) return;

      const userEnteredItem = actions.payload.item;

      const existingItem = state.items.find(
        (item) => item.id === userEnteredItem.id
      );

      if (existingItem) {
        const itemQuantity = existingItem.reduce(
          (previousValue, currentItem) => {
            return previousValue + currentItem.quantity;
          },
          0
        );

        const newItem = { ...existingItem, quantity: itemQuantity };
        const newItemsList = {
          ...state.items.filter((obj) => obj.id !== newItem.id),
          existingItem,
        };

        state.items = newItemsList;
      } else {

        state.items.push({
          id: userEnteredItem.id,
          name: userEnteredItem.name,
          description:userEnteredItem.description,
          quantity: userEnteredItem.quantity,
          price: userEnteredItem.price,
          totalPrice: userEnteredItem.price * userEnteredItem.quantity,
        });
      }

      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
      }, 0);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
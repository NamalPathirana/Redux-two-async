import { createSlice } from "@reduxjs/toolkit";

initialCartState = {
  items: [
    {
      id: 0,
      name: "",
      quantity: 0,
      price: 0,
      totalPrice: 0,
    },
  ],
  totalAmount: 0.0,
};

const cartSlice = createSlice({
  name: "cart",
  initialCartState,
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
        state.items.add({
          id: userEnteredItem.id,
          name: userEnteredItem.quantity,
          quantity: userEnteredItem.quantity,
          price: userEnteredItem.price,
          totalPrice: userEnteredItem.price * userEnteredItem.quantity,
        });
      }

      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        previousValue + currentItem.totalPrice;
      }, 0);
    },
  },
});


export cartSlice;
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
  items: [],
  totalAmount: 0.0,
  totalItems: 0,
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
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
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

      state.totalItems = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
      }, 0);

      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
      }, 0);
    },
    increaseQuantity(state, actions) {
      const existingItem = state.items.find(
        (item) => item.id === actions.payload.id
      );
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;

      state.totalItems = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
      }, 0);
      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
      }, 0);
    },
    decreaseQuantity(state, actions) {
      const existingItem = state.items.find(
        (item) => item.id === actions.payload.id
      );

      existingItem.quantity--;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
      state.totalItems = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
      }, 0);
      state.totalAmount = state.items.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
      }, 0);

      if (existingItem.quantity === 0)
        state.items = state.items.filter((item) => item.id !== existingItem.id);
    },
  },
});

const sendCartData = (cart) => {
  return () => {
    dispatch(
      UIActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const response = await fetch(
      "https://react-http-demo-87b25-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error("something went wrong!");
    }
  }
}

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

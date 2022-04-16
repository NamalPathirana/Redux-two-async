import { cartActions } from "./cart";
import { UIActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();
      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sending cart Successful !",
        })
      );
    } catch (e) {
      sendCartData().catch((error) => {
        dispatch(
          UIActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Some thing went wrong",
          })
        );
      });
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const getDataRequest = async () => {
      const response = await fetch(
        "https://react-http-demo-87b25-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const responseData = await response.json();

      dispatch(cartActions.addItemToCart(responseData));
    };

    try {
      await getDataRequest();
      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Data fetched !!! ",
        })
      );
    } catch (e) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error...",
          message: "fetch data failed",
        })
      );
    }
  };
};

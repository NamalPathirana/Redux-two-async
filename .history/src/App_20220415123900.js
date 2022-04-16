import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { UIActions } from "./store/ui-slice";

function App() {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const dispatch = useDispatch();

  const isVisible = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        "https://react-http-demo-87b25-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        dispatch(
          UIActions({
            status: "success",
            title: "Success...",
            message: "Sending cart data!",
          })
        );
      }

      dispatch(
        UIActions({
          status: "success",
          title: "Success...",
          message: "Sending cart data!",
        })
      );
    };

    sendCartData();
  }, [cart]);

  return (
    <Fragment>
      <Notification></Notification>
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData ,fetchCartData } from "./store/cart-actions";

let initialRender = true;

function App() {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const notification = useSelector((state) => {
    return state.ui.notification;
  });

  const dispatch = useDispatch();

  const isVisible = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    if (initialRender) {
      initialRender = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { UIActions } from "./store/ui-slice";

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
    const sendCartData = async () => {
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
      const responseData = await response.json();

      if (!response.ok) {
        dispatch(
          UIActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Some thing went wrong",
          })
        );
      }

      if(initialRender){
        initialRender = false;
        return;
      }

      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sending cart Successful !",
        })
      );
    };

    sendCartData();
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      ></Notification>}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

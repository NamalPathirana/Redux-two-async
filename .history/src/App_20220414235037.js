import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";

function App() {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const isVisible = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    fetch(
      "https://react-http-demo-87b25-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Fragment>
    
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
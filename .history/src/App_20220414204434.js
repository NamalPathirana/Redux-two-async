import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const isVisible = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    fetch({
      url: "https://react-http-demo-87b25-default-rtdb.firebaseio.com/cart.json",
      method: "PUT",
      body: {
        
      },
    });
  }, [cart]);

  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      cartActions.addItemToCart({
        item: {
          id: 1,
          name: "beatsPro",
          description: "Wireless head set",
          quantity: 1,
          price: 10,
        },
      })
    );
  }, [dispatch]);

  const cartItems = useSelector((state) => state.cart.items);

  const productList = [
    {
      id: 1,
      name: "beatsPro",
      description: "Wireless head set",
      price: 10,
    },
    {
      id: 2,
      name: "Iphone",
      description: "space grey 5G",
      price: 8,
    },
    {
      id: 3,
      name: "Nokia g332",
      description: "testing model",
      price: 3.99,
    },
  ];

  onClickHandler = () => {
    
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map((item) => {
          return (
            <ProductItem
              title={item.name}
              price={item.price}
              description={item.description}
              onClick={}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductItem = (props) => {
  // const { title, price, description } = props;

  const dispatch = useDispatch(
    cartActions.addItemToCart({
      item: {
        id: 1,
        name: "beatsPro",
        description: "Wireless head set",
        quantity: 2,
        price: 10,
      },
    })
  );

  useEffect(() => {
    dispatch();
  }, []);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <li className={classes.item}>
      {cartItems.map((item) => {
        return (
          <Card>
            <header>
              <h3>{item.name}</h3>
              <div className={classes.price}>${item.price.toFixed(2)}</div>
            </header>
            <p>{item.description}</p>
            <div className={classes.actions}>
              <button>Add to Cart</button>
            </div>
          </Card>
        );
      })}
    </li>
  );
};

export default ProductItem;

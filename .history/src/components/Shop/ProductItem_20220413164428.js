import Card from "../UI/Card";
import classes from "./ProductItem.module.css";


const ProductItem = (props) => {
  // const { title, price, description } = props;


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

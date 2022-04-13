import classes from './CartButton.module.css';
import {useSelector} from "react-redux";

const CartButton = () => {

  const cartItemCount = useSelector(
    (state)=>{
      return state.cart.totalItems;
    }
  );

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default CartButton;

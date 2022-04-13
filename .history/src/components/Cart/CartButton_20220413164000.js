import classes from './CartButton.module.css';
import {useSelect} from "react-redux";

const CartButton = () => {

  const cartItemCount = useSelect(
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

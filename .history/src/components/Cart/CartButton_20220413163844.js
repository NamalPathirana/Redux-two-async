import classes from './CartButton.module.css';
import {useSelect} from "../../store/cart";

const CartButton = () => {

  const cartItemCount = useSelect(
    (state)=>{
      return state.cart.totalItems;
    }
  );

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

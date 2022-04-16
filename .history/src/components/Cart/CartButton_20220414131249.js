import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../../store/ui-slice";

const CartButton = () => {
  const dispatch = useDispatch();

  const cartItemCount = useSelector((state) => {
    return state.cart.totalItems;
  });

  const cartToggleHandler = () => {
    dispatch(UIActions.toggle());
  };

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default CartButton;

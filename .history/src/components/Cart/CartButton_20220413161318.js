import classes from './CartButton.module.css';

const CartButton = () => {

  const dispatch = useDispatch();

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

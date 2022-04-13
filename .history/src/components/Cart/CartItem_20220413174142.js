import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price , onIncreaseBtnClicked, onDecreaseBtnClicked } = props.item;

  const onIncreaseBtnHandler = () => {

  }

  const onDecreaseBtnHandler = () => {

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecreaseBtnClicked}>-</button>
          <button onClick={onIncreaseBtnClicked}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart';
import {useDispatch,useSelector} from "react-redux"

const ProductItem = (props) => {
  const { title, price, description } = props;
  
  const dispatch = useDispatch();

  const cartItems = useSelector((state)=>state.cart.item);

  return (
    <li className={classes.item}>
    
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

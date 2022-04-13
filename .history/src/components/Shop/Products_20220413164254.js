import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.addItemToCart({
      item: {
        id: 1,
        name: "beatsPro",
        description: "Wireless head set",
        quantity: 2,
        price: 10,
      },
    }));
  }, [dispatch]);

  const cartItems = useSelector((state) => state.cart.items);


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
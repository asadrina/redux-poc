import './Styles.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buyMobiles } from './redux/actions/mobileAction';
import { buyLaptops } from './redux/actions/laptopAction';
import { fetchProducts } from './redux/actions/productAction';

function App() {
  const numOfMobiles = useSelector(state => state.mobiles.numOfMobiles)
  const numOfLaptops = useSelector(state => state.laptops.numOfLaptops)
  const numOfProducts = useSelector(state => state.products.products)
  const dispatch = useDispatch()
  return (
    <>
    <div className='App'>
      <div className='item'>
        <h1> Mobile Store </h1>
        <p> Number of books available in the store : {numOfMobiles}</p>
        <button onClick={() => dispatch(buyMobiles())}>Buy Mobiles</button>
      </div>

      <div className='item'>
        <h1> Laptop Store </h1>
        <p> Number of pens available in the store : {numOfLaptops}</p>
        <button onClick={() => dispatch(buyLaptops())}>Buy Laptops</button>
      </div>

      <div className='item'>
        <h1> Fetch Users </h1>
        <p> Number of Users : {numOfProducts.length}</p>
        <p> Users : {JSON.stringify(numOfProducts)}</p>
        <button onClick={() => dispatch(fetchProducts())}>Fetch </button>
      </div>
    </div>
    </>
  );
}

export default App;

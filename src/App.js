import { useReducer } from 'react';

import initialState from './store/initial-state';
import orderReducer from './reducers/OrderReducer';

import OrderContext from './store/order-context';

import './App.css';

import Header from './components/Header/Header';
import OrderList from './components/Order/OrderList';

const App = () => {
  const [orderState, dispatchOrder] = useReducer(orderReducer, initialState);

  const addToCartHandler = (item) => {
    dispatchOrder({ type: 'ADD_TO_CART', item });
  };

  return (
    <OrderContext.Provider
      value={{ state: orderState, addToCart: addToCartHandler }}
    >
      <Header />
      <OrderList />
    </OrderContext.Provider>
  );
};

export default App;

import { useReducer, useState } from 'react';

import initialState from './store/initial-state';
import orderReducer from './reducers/OrderReducer';

import OrderContext from './store/order-context';

import './App.css';

import Header from './components/Header/Header';
import OrderList from './components/Order/OrderList';
import Backdrop from './components/UI/Backdrop';
import Modal from './components/UI/Modal';
import OrderCart from './components/Order/OrderCart';

const App = () => {
  const [orderState, dispatchOrder] = useReducer(orderReducer, initialState);
  const [showCart, setShowCart] = useState(false);

  const addToCartHandler = (item) => {
    dispatchOrder({ type: 'ADD_TO_CART', item });
  };

  const changeQuantityHandler = (item, step) => {
    dispatchOrder({ type: 'CHANGE_QUANTITY', item, step });
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <OrderContext.Provider
      value={{
        state: orderState,
        addToCart: addToCartHandler,
        changeQuantity: changeQuantityHandler,
      }}
    >
      <Header showCart={showCartHandler} />
      <OrderList />
      {showCart && <Backdrop hideCart={hideCartHandler} />}
      {showCart && (
        <Modal>
          <OrderCart hideCart={hideCartHandler} />
        </Modal>
      )}
    </OrderContext.Provider>
  );
};

export default App;

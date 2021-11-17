import { useReducer } from 'react';

import initialState from './store/initial-state';
import orderReducer from './reducers/OrderReducer';

import OrderContext from './store/order-context';

import './App.css';
import Header from './components/Header/Header';

const App = () => {
  const [orderState, dispatchOrder] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={orderState}>
      <Header />
    </OrderContext.Provider>
  );
};

export default App;

import { useReducer } from 'react';

import initialState from './store/initial-state';
import orderReducer from './reducers/OrderReducer';

import OrderContext from './store/order-context';

import './App.css';

const App = () => {
  const [orderState, dispatchOrder] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={orderState}>
      <div className="App"></div>
    </OrderContext.Provider>
  );
};

export default App;

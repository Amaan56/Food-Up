import { useReducer } from 'react';

import initialState from './store/initial-state';
import orderReducer from './reducers/OrderReducer';

import './App.css';

const App = () => {
  const [orderState, dispatchOrder] = useReducer(orderReducer, initialState);

  return <div className="App"></div>;
};

export default App;

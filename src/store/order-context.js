import React from 'react';
import initialState from './initial-state';

const OrderContext = React.createContext({
  state: initialState,
  addToCart: (item) => {},
});

export default OrderContext;

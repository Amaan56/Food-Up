import { useState, useContext } from 'react';

import styles from './OrderItem.module.css';

import Button from '../UI/Button';

import OrderContext from '../../store/order-context';

const OrderItem = (props) => {
  const [quantityInput, setQuantityInput] = useState('1');

  const orderContext = useContext(OrderContext);

  const changeQuantityInputHandler = (event) => {
    setQuantityInput(event.target.value);
  };

  const addQuantityHandler = () => {
    const item = { ...props.item, quantity: +quantityInput };

    orderContext.addToCart(item);
  };

  return (
    <li className={styles['order-item']}>
      <div className={styles['order-item-left']}>
        <span style={{ fontWeight: 'bold' }}>{props.item.name}</span>
        <span style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>
          {props.item.description}
        </span>
        <span style={{ color: 'brown', fontWeight: 'bold' }}>
          $ {props.item.price}
        </span>
      </div>
      <div className={styles['order-item-right']}>
        <div className={styles['order-item-right-control']}>
          <label>Amount</label>
          <input
            type="number"
            min="1"
            onChange={changeQuantityInputHandler}
            value={quantityInput}
          />
        </div>
        <Button onClick={addQuantityHandler}>+ Add </Button>
      </div>
    </li>
  );
};

export default OrderItem;

import { useContext } from 'react';
import OrderContext from '../../store/order-context';
import Button from '../UI/Button';
import styles from './OrderCartItem.module.css';

const OrderCartItem = (props) => {
  const orderContext = useContext(OrderContext);

  return (
    <li className={styles['order-cart-item']}>
      <div className={styles['order-cart-item-content']}>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          {props.item.name}
        </p>
        <span style={{ color: 'brown', fontWeight: 'bold', fontSize: '1rem' }}>
          ${props.item.price}
        </span>
        <span className={styles['order-cart-item-content-quantity']}>
          x {props.item.quantity}
        </span>
      </div>
      <div className={styles['order-cart-item-actions']}>
        <Button
          type="outline"
          onClick={() => orderContext.changeQuantity(props.item, -1)}
        >
          -
        </Button>
        <Button
          type="outline"
          onClick={() => orderContext.changeQuantity(props.item, 1)}
        >
          +
        </Button>
      </div>
    </li>
  );
};

export default OrderCartItem;

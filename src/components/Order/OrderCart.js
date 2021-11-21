import { useContext } from 'react';

import OrderContext from '../../store/order-context';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './OrderCart.module.css';
import OrderCartItem from './OrderCartItem';

const OrderCart = (props) => {
  const orderContext = useContext(OrderContext);

  const cartItems = orderContext.state.menuItems.map((item) => {
    if (item.inCart) return <OrderCartItem item={item} key={item.id} />;
    return null;
  });

  return (
    <Card className={styles['order-cart']}>
      <ul>{cartItems}</ul>
      <div>
        {orderContext.state.cartItemCount !== 0 ? (
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Total Amount
            </span>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              ${orderContext.state.totalPrice}
            </span>
          </p>
        ) : (
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign:'center'}}>No Items Added</p>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => props.hideCart()} type="outline">
            Close
          </Button>
          <Button
            onClick={() => props.hideCart()}
            disabled={orderContext.state.cartItemCount === 0}
          >
            Order
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OrderCart;

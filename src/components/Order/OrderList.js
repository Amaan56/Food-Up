import styles from './OrderList.module.css';

import { useContext } from 'react';
import OrderContext from '../../store/order-context';
import Card from '../UI/Card';
import OrderItem from './OrderItem';

const OrderList = () => {
  const orderContext = useContext(OrderContext);

  const orderList = orderContext.state.menuItems.map((item) => (
    <OrderItem item={item} key={item.id} />
  ));

  return (
    <Card className={styles['order-list']}>
      <ul>{orderList}</ul>
    </Card>
  );
};

export default OrderList;

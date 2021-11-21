import styles from './Header.module.css';
import CartIcon from '../../assets/CartIcon';

import { useContext } from 'react';
import OrderContext from '../../store/order-context';

const Header = (props) => {
  const orderContext = useContext(OrderContext);

  return (
    <div className={styles.header}>
      <span className={styles['header-logo']}>FoodUp</span>
      <div className={styles['header-cart']} onClick={props.showCart}>
        <div className={styles['header-cart-icon']}>
          <CartIcon />
        </div>
        <span>Your Cart</span>
        <span className={styles['header-cart-count']}>
          {orderContext.state.cartItemCount}
        </span>
      </div>
    </div>
  );
};

export default Header;

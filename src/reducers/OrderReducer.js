const OrderReducer = (state, action) => {
  const countCartItem = (items) => {
    return items.reduce((count, item) => {
      if (item.inCart) count += item.quantity;
      return count;
    }, 0);
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      if (item.inCart) total += item.quantity * item.price;
      return total;
    }, 0);
  };

  switch (action.type) {
    case 'ADD_TO_CART':
      const selectedItemIndex = state.menuItems.findIndex(
        (item) => action.item.id === item.id
      );

      const selectedItem = {
        ...state.menuItems[selectedItemIndex],
        quantity: action.item.quantity,
        inCart: true,
      };

      const newOrderItems = [
        ...state.menuItems.slice(0, selectedItemIndex),
        selectedItem,
        ...state.menuItems.slice(selectedItemIndex + 1),
      ];

      return {
        menuItems: newOrderItems,
        cartItemCount: countCartItem(newOrderItems),
        totalPrice: calculateTotal(newOrderItems),
      };

    case 'CHANGE_QUANTITY':
      const selectedItemIndex = state.menuItems.findIndex(
        (item) => action.item.id === item.id
      );

      const selectedItem = {
        ...state.menuItems[selectedItemIndex],
        quantity: state.menuItems[selectedItemIndex].quantity + step,
        inCart:
          state.menuItems[selectedItemIndex].quantity + step > 0 ? true : false,
      };

      const newOrderItems = [
        ...state.menuItems.slice(0, selectedItemIndex),
        selectedItem,
        ...state.menuItems.slice(selectedItemIndex + 1),
      ];

      return {
        menuItems: newOrderItems,
        cartItemCount: countCartItem(newOrderItems),
        totalPrice: calculateTotal(newOrderItems),
      };

    default:
      return state;
  }
};

export default OrderReducer;

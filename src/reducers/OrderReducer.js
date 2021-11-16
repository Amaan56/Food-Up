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

  const selectedItemIndex = state.menuItems.findIndex(
    (item) => action.item.id === item.id
  );

  let selectedItem;
  let updatedOrderItems;

  switch (action.type) {
    case 'ADD_TO_CART':
      selectedItem = {
        ...state.menuItems[selectedItemIndex],
        quantity: action.item.quantity,
        inCart: true,
      };

      updatedOrderItems = [
        ...state.menuItems.slice(0, selectedItemIndex),
        selectedItem,
        ...state.menuItems.slice(selectedItemIndex + 1),
      ];

      return {
        menuItems: updatedOrderItems,
        cartItemCount: countCartItem(updatedOrderItems),
        totalPrice: calculateTotal(updatedOrderItems),
      };

    case 'CHANGE_QUANTITY':
      selectedItem = {
        ...state.menuItems[selectedItemIndex],
        quantity: state.menuItems[selectedItemIndex].quantity + action.step,
        inCart:
          state.menuItems[selectedItemIndex].quantity + action.step > 0
            ? true
            : false,
      };

      updatedOrderItems = [
        ...state.menuItems.slice(0, selectedItemIndex),
        selectedItem,
        ...state.menuItems.slice(selectedItemIndex + 1),
      ];

      return {
        menuItems: updatedOrderItems,
        cartItemCount: countCartItem(updatedOrderItems),
        totalPrice: calculateTotal(updatedOrderItems),
      };

    default:
      return state;
  }
};

export default OrderReducer;

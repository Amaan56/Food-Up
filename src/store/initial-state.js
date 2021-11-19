const initialState = {
  menuItems: [
    {
      id: 1,
      name: 'Momos Pizza',
      description: 'Combination of Momos and Pizza',
      price: 20,
      quantity: 0,
      inCart: false,
    },
    {
      id: 2,
      name: 'Chikcen Popcorn',
      description: 'Juicy pieces of tender fried chicken',
      price: 10,
      quantity: 0,
      inCart: false,
    },
    {
      id: 3,
      name: 'Chicken Nuggets',
      description: 'Soft fried nuggets with mustard sauce',
      price: 15,
      quantity: 0,
      inCart: false,
    },
    {
      id: 4,
      name: 'Chicken Teriyaki Sub',
      description: 'Healthy sandwich with 5 different sauces',
      price: 20,
      quantity: 0,
      inCart: false,
    },
    {
      id: 5,
      name: 'Mud Pie Shake',
      description: 'Added brownie milkshake',
      price: 15,
      quantity: 0,
      inCart: false,
    },
  ],
  cartItemCount: 0,
  totalPrice: 0,
};

export default initialState;

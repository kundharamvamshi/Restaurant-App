import {createContext} from 'react'

const CartContext = createContext({
  restaurantName: '',
  setRestaurantName: () => {},
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext

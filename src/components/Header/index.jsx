import {FaShoppingCart} from 'react-icons/fa'

import './index.css'

const Header = props => {
  const {restaurantName, cartCount} = props

  return (
    <nav className="header-container">
      <h1 className="restaurant-heading">{restaurantName}</h1>

      <div className="orders-container">
        <p className="orders-text">My Orders</p>

        <div className="cart-container">
          <FaShoppingCart className="cart-icon" />
          <p className="cart-count">{cartCount}</p>
        </div>
      </div>
    </nav>
  )
}

export default Header

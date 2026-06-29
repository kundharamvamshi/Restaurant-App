/* eslint-disable camelcase */

import './index.css'

const DishItem = props => {
  const {dishDetails, count, incrementDish, decrementDish} = props

  const {
    dish_id,
    dish_name,
    dish_price,
    dish_currency,
    dish_description,
    dish_image,
    dish_Availability,
    dish_calories,
    addonCat,
  } = dishDetails

  return (
    <li className="dish-item">
      <div className="dish-details-container">
        <h1 className="dish-name">{dish_name}</h1>

        <p className="dish-price">
          {dish_currency} {dish_price}
        </p>

        <p className="dish-description">{dish_description}</p>

        {dish_Availability ? (
          <div className="quantity-container">
            <button
              type="button"
              className="quantity-btn"
              onClick={() => decrementDish(dish_id)}
            >
              -
            </button>

            <p className="quantity">{count}</p>

            <button
              type="button"
              className="quantity-btn"
              onClick={() => incrementDish(dish_id)}
            >
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not available</p>
        )}

        {addonCat.length > 0 && (
          <p className="customization">Customizations available</p>
        )}
      </div>

      <div className="calories-container">
        <p className="calories">{dish_calories} calories</p>
      </div>

      <img src={dish_image} alt={dish_name} className="dish-image" />
    </li>
  )
}

export default DishItem

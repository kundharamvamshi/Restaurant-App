import {Component} from 'react'
import Header from './components/Header'
import TabItem from './components/TabItem'
import DishItem from './components/DishItem'

import './App.css'

const apiUrl =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

class App extends Component {
  state = {
    restaurantName: '',
    menuList: [],
    activeTabId: '',
    cartCount: 0,
    dishCounts: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const restaurant = data[0]

    this.setState({
      restaurantName: restaurant.restaurant_name,
      menuList: restaurant.table_menu_list,
      activeTabId: restaurant.table_menu_list[0].menu_category_id,
      isLoading: false,
    })
  }

  changeTab = id => {
    this.setState({
      activeTabId: id,
    })
  }

  incrementDish = dishId => {
    this.setState(prevState => {
      const updatedCounts = {
        ...prevState.dishCounts,
        [dishId]: (prevState.dishCounts[dishId] || 0) + 1,
      }

      return {
        dishCounts: updatedCounts,
        cartCount: prevState.cartCount + 1,
      }
    })
  }

  decrementDish = dishId => {
    this.setState(prevState => {
      const currentCount = prevState.dishCounts[dishId] || 0

      if (currentCount === 0) {
        return null
      }

      return {
        dishCounts: {
          ...prevState.dishCounts,
          [dishId]: currentCount - 1,
        },
        cartCount: prevState.cartCount - 1,
      }
    })
  }

  render() {
    const {
      restaurantName,
      menuList,
      activeTabId,
      cartCount,
      dishCounts,
      isLoading,
    } = this.state

    if (isLoading) {
      return <h1>Loading...</h1>
    }

    const activeCategory = menuList.find(
      each => each.menu_category_id === activeTabId,
    ) || {
      category_dishes: [],
    }

    return (
      <div className="app-container">
        <Header restaurantName={restaurantName} cartCount={cartCount} />

        <ul className="tabs-container">
          {menuList.map(each => (
            <TabItem
              key={each.menu_category_id}
              details={each}
              isActive={activeTabId === each.menu_category_id}
              changeTab={this.changeTab}
            />
          ))}
        </ul>

        <ul className="dishes-container">
          {activeCategory.category_dishes.map(eachDish => (
            <DishItem
              key={eachDish.dish_id}
              dishDetails={eachDish}
              count={dishCounts[eachDish.dish_id] || 0}
              incrementDish={this.incrementDish}
              decrementDish={this.decrementDish}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App

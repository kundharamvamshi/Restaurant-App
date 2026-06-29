/* eslint-disable camelcase */

import './index.css'

const TabItem = props => {
  const {details, isActive, changeTab} = props

  const {menu_category, menu_category_id} = details

  const onClickTab = () => {
    changeTab(menu_category_id)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={isActive ? 'tab-button active-tab' : 'tab-button'}
        onClick={onClickTab}
      >
        {menu_category}
      </button>
    </li>
  )
}

export default TabItem

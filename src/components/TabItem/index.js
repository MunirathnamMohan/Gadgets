import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activetabClassName = isActive ? 'active-tab-btn' : ''

  const onClicked = () => {
    updateActiveId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activetabClassName}`}
        onClick={onClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

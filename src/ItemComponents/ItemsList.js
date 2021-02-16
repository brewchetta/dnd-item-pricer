import React from 'react'
import ItemOption from './ItemOption'

const ItemsList = ({currentItems, setShownItem, itemsChosen, setItemsChosen, itemPrices, setItemPrices}) => {

  const renderItemOptions = () => {
    return currentItems.map((item, i) => <ItemOption key={i} {...{item, setShownItem, itemsChosen, setItemsChosen, itemPrices, setItemPrices}} />)
  }

  // List of all items as filtered by ItemSearchBar

  return (
    <>

      <h2>Item List</h2>

      <div id="items-list">

        {renderItemOptions()}

      </div>

    </>
  )

}

export default ItemsList

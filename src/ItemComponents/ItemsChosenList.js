import React from 'react'
import ItemChosen from './ItemChosen'

const ItemsChosenList = ({setItemsChosen, itemsChosen, setShownItem, itemPrices, resetData}) => {

  const removeItem = (item) => setItemsChosen(itemsChosen.filter(i => i !== item))


  const renderItemsChosen = () => itemsChosen.map((item, i) => <ItemChosen key={i} {...{
    item,
    setShownItem,
    removeItem,
    itemPrice: itemPrices[item.name]
  }} />)

  return (
    <div id="items-chosen">

      <div id="items-chosen-list">

        {renderItemsChosen()}

      </div>

      {itemsChosen.length ? <button onClick={resetData}>Reset</button> : null}

    </div>
  )

}

export default ItemsChosenList

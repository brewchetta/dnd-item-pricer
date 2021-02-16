import React, {useState} from 'react'
import createItemPrice from '../createItemPrice'

const ItemOption = ({item, setShownItem, itemsChosen, setItemsChosen, itemPrices, setItemPrices}) => {

  const [canDblClick, setCanDblClick] = useState(false)

  const addItem = () => {
    // Create item price if none exist
    if (!itemPrices[item.name]) {
      itemPrices[item.name] = createItemPrice(item)
    }

    // Add item to list
    setItemsChosen([...itemsChosen, item])
  }

  const removeItem = () => {
    setItemsChosen(itemsChosen.filter(i => i !== item))
  }

  const handleClick = () => {
    // Set shown item for the item viewer
    setShownItem(item)

    // Add item if doubleclicked and not added
    if (!itemsChosen.includes(item) && canDblClick) {
      setCanDblClick(!canDblClick)
      addItem()
    }

    // Remove item if doubleclicked and added
    if (itemsChosen.includes(item) && canDblClick) {
      setCanDblClick(!canDblClick)
      removeItem()
    }

    // Set timeout to remove doubleclick if this is the first click
    if (!canDblClick) {
      setCanDblClick(true)
      setTimeout(() => setCanDblClick(false), 300)
    }

  }

  return <button onClick={handleClick}>{item.name}</button>

}

export default ItemOption

import React from 'react'
import createItemPrice from '../createItemPrice'

const capitalize = str => str.replace(str[0], str[0].toUpperCase())

const ItemShow = ({shownItem, setShownItem, itemsChosen, setItemsChosen, itemPrices, setItemPrices}) => {

  const isItemChosen = () => {
    return itemsChosen.includes(shownItem)
  }

  const handleAddOrRemove = () => {
    if (!isItemChosen()) {
      setItemsChosen([...itemsChosen, shownItem])
    } else {
      setItemsChosen([...itemsChosen].filter(item => item !== shownItem))
      setShownItem(null)
    }
  }

  const itemPrice = () => {
    // Create random item price if none exist
    if (!itemPrices[shownItem.name]) {
      itemPrices[shownItem.name] = createItemPrice(shownItem)
    }

    return itemPrices[shownItem.name]
  }

  // const stripAsterisks = paragraph => paragraph.replace(/\*+\w+\S\*+/g, text => text.replace(/\*+/g, ""))
  const stripAsterisks = paragraph => paragraph.replace(/\*+/g, "")

  if (shownItem) {
    return (
      <div className="item-show">

        <p>

          {shownItem.name}

          <button onClick={handleAddOrRemove}>
            {!isItemChosen() ? "Add" : "Remove"}
          </button>

        </p>

        <p>{shownItem.rarity === "very" ? "Very Rare" : capitalize(shownItem.rarity)} | {itemPrice()} gold | {shownItem.type.slice(1)}</p>

        <p>{stripAsterisks(shownItem.description)}</p>

        <p>{shownItem.attunmement ? "requires attunement" : null}</p>



      </div>
    )
  }

  return <div className="item-show" />

}

export default ItemShow

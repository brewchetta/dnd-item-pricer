import React from 'react'
import beyondIcon from '../assets/beyond-icon.png'
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

  const parseBeyondURL = () => {
    if (shownItem.name.includes("Potion") && shownItem.name.includes("Healing")) {
      return `https://www.dndbeyond.com/magic-items/potion-of-healing`
    } else {
      return `https://www.dndbeyond.com/magic-items/${shownItem.name.toLowerCase().replace(/[,+'"]/g, "").replaceAll(" ","-")}`
    }
  }

  const stripAsterisks = paragraph => paragraph.replace(/\*+/g, "")

  if (shownItem) {
    return (
      <div className="item-show">

        <a href={parseBeyondURL()} target="__blank">
          <img id="beyond-icon" src={beyondIcon} alt="D&D Beyond" />
        </a>

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

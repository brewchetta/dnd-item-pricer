import React, {useState} from 'react'
import coinstack from '../assets/coinstack.png'

const ItemChosen = ({item, setShownItem, removeItem, itemPrice}) => {

  const [canDblClick, setCanDblClick] = useState(false)

  const handleClick = () => {
    // Set shown item for the item viewer
    setShownItem(item)

    // Remove item if doubleclicked
    if (canDblClick) {
      setCanDblClick(!canDblClick)
      removeItem(item)
      setShownItem(null)
    }

    // Set timeout to remove doubleclick if this is the first click
    if (!canDblClick) {
      setCanDblClick(true)
      setTimeout(() => setCanDblClick(false), 300)
    }

  }

  return (

    <button onClick={handleClick}>

      {item.name} <br/> <img src={coinstack} alt="Cost: " style={{height: "1em"}} />{itemPrice}

    </button>

  )

}

export default ItemChosen

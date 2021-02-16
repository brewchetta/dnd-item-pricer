import React, {useState, useEffect} from 'react'
// Components
import ItemShow from './ItemShow'
import ItemsList from './ItemsList'
import ItemSearchBar from './ItemSearchBar'
import ItemsChosenList from './ItemsChosenList'
// Item List
import {parsed_items} from '../parsed_items'

const ItemsContainer = () => {

  const [currentItems, setCurrentItems] = useState(Object.values(parsed_items))
  const [shownItem, setShownItem] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [searchRarity, setSearchRarity] = useState('all')
  const [itemsChosen, setItemsChosen] = useState([])
  const [itemPrices, setItemPrices] = useState({})

  const resetData = () => {
    setShownItem(null)
    setItemsChosen([])
    setItemPrices({})
  }

  useEffect(() => {
    let newItems = Object.values(parsed_items)

    if (searchInput) {
      newItems = newItems.filter(i => i.name.toLowerCase().includes(searchInput.toLowerCase()))
    }

    if (searchRarity !== 'all') {
      newItems = newItems.filter(i => i.rarity === searchRarity)
    }

    setCurrentItems(newItems)

  }, [searchInput, searchRarity])

  const setRandomItem = () => setShownItem(currentItems[Math.floor(Math.random()*currentItems.length)])

  return (
    <div id="items-container">

      <div id="item-finder">

        <ItemSearchBar {...{searchInput, setSearchInput, searchRarity, setSearchRarity, setRandomItem}} />

        <ItemsList {...{currentItems, setShownItem, itemsChosen, setItemsChosen, itemPrices}} />

      </div>

      <div id="item-panel-right">

        <ItemsChosenList {...{itemsChosen, setShownItem, setItemsChosen, itemPrices, resetData}} />

        { shownItem ? <ItemShow {...{shownItem, setShownItem, itemsChosen, setItemsChosen, itemPrices, setItemPrices}} /> : null}

      </div>

    </div>
  )

}

export default ItemsContainer

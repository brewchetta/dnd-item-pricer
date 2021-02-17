import React from 'react'

const ItemSearchBar = ({searchInput, setSearchInput, searchRarity, setSearchRarity, setRandomItem, itemNames}) => {

  const itemNameOptions = itemNames.map(name => <option value={name} />)

  return (
    <div className='item-search-bar'>

      <input type='text'
      list="item-names"
      placeholder="Search"
      value={searchInput}
      onChange={e => setSearchInput(e.target.value)} />

      <datalist id="item-names">
        {itemNameOptions}
      </datalist>

      <select value={searchRarity}
      onChange={e => setSearchRarity(e.target.value)}>

        {/*types: common, uncommon, rare, very rare, legendary, artifact */}
        <option value="all">All</option>
        <option value="common">Common</option>
        <option value="uncommon">Uncommon</option>
        <option value="rare">Rare</option>
        <option value="very">Very Rare</option>
        <option value="legendary">Legendary</option>
        {/* <option value="artifact">Artifact</option> */}

      </select>

      <input type="button"
      id="random-item-button"
      value={"🎲"}
      onClick={setRandomItem}
      />

    </div>
  )


}

export default ItemSearchBar

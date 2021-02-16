const isConsumable = (item) => item.name.toLowerCase().includes("potion") || item.name.toLowerCase().includes("scroll")

//   Common: (1d6+1) * 10 gp
const calculateCommonPrice = (item) => {
  const roll = Math.ceil(Math.random() * 6) + 1
  console.log('1d6 + 1 = ', roll)
  return isConsumable(item) ? roll * 5 : roll * 10
}

// Uncommon: 1d6 * 100 gp
const calculateUncommonPrice = (item) => {
  const roll = Math.ceil(Math.random() * 6)
  console.log('1d6 = ', roll)
  return isConsumable(item) ? roll * 50 : roll * 100
}

// Rare: 2d10 * 1000 gp
const calculateRarePrice = (item) => {
  const roll = Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10)
  console.log('2d10 = ', roll)
  return isConsumable(item) ? roll * 500 : roll * 1000
}

// Very: (1d4+1) * 10000 gp
const calculateVeryRarePrice = (item) => {
  const roll = Math.ceil(Math.random() * 4) + 1
  console.log('1d4 + 1 = ', roll)
  return isConsumable(item) ? roll * 5000 : roll * 10000
}

// Legendary: 2d6 * 25000 gp
const calculateLegendaryPrice = (item) => {
  const roll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)
  console.log('2d6 = ', roll)
  return isConsumable(item) ? roll * 12500 : roll * 25000
}

const createItemPrice = (item) => {

  switch (item.rarity) {
    case "common":
      return calculateCommonPrice(item)
    case "uncommon":
      return calculateUncommonPrice(item)
    case "rare":
      return calculateRarePrice(item)
    case "very":
      return calculateVeryRarePrice(item)
    case "legendary":
      return calculateLegendaryPrice(item)
    default:
      return calculateCommonPrice(item)

  }
}

export default createItemPrice

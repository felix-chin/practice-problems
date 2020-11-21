// time: O(n)
// space: O(n)
function budgetShopping(n, bundleQuantities, bundleCosts) {
  return getSolution(n, 0, 0, bundleQuantities, bundleCosts);
}

function getSolution(budget, currentQuantity, currentCost, bundleQuantities, bundleCosts) {
  let maxQuantity = currentQuantity;
  for (let i = 0; i < bundleQuantities; i++) {
    if (currentCost + bundleCosts[i] <= budget) {
      let amount = getSolution(budget, currentQuantity + bundleQuantities, currentCost + bundleCosts, bundleQuantities, bundleCosts)
      if (maxQuantity < amount) {
        maxQuantity = amount;
      }
    }
  }
  return maxQuantity;
}

const quantities = [20, 19];
const costs = [24, 20]

budgetShopping(50, quantities, costs)

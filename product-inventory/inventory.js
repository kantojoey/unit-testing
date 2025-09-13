function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate >= 1) return null;
    if (discountRate >= 0 && discountRate < 1) return price*(1-discountRate);
    return null;
};

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    for(let i = 0; i < products; i++){
        
    }    return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

module.exports = {calculateDiscount, filterProducts, sortInventory}
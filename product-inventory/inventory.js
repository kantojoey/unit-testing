function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate >= 1) return null;
    if (discountRate >= 0 && discountRate < 1) return price*(1-discountRate);
    return null;
};

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    return products.filter(callback);
}
// const products = [
//     { name: 'Mouse', price: 25 },
//     { name: 'Keyboard', price: 75 },
//     { name: 'Monitor', price: 200 }
// ];

// let under200 = filterProducts(products, product => product.price < 200);
// console.log(under200);


function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

module.exports = {calculateDiscount, filterProducts, sortInventory}
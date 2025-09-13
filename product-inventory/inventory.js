function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate >= 1) return null;
    if (discountRate >= 0 && discountRate < 1) return price*(1-discountRate);
    return null;
};

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    return products.filter(callback);
};


function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];

    return [...inventory].sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
};

const products = [
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 200 }
];

// calculateDiscount() TEST

// let under200 = filterProducts(products, product => product.price < 200);
// console.log(under200);

//filterProducts() TEST

// sortInventory() TEST

let priceSort = sortInventory(products, 'price');
console.log(priceSort);

module.exports = {calculateDiscount, filterProducts, sortInventory}
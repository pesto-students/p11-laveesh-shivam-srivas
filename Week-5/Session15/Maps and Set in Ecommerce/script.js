
const productViews = new WeakMap();
const cartItems = new WeakSet();

function incrementProductViews(productId) {
    const productKey = getProductKey(productId);

    if (productViews.has(productKey)) {
        productViews.set(productKey, productViews.get(productKey) + 1);
    } else {
        productViews.set(productKey, 1);
    }
}

function addToCart(productId) {
    const productKey = getProductKey(productId);

    if (cartItems.has(productKey)) {
        return "Product already in cart";
    } else {
        cartItems.add(productKey);
        return "Product added to cart";
    }
}

// Utility function to create an object key for product ID
function getProductKey(productId) {
    return { id: productId };
}

// Example usage
incrementProductViews(123);
incrementProductViews(123);
console.log(addToCart(123)); // Output: "Product added to cart"
console.log(addToCart(123)); // Output: "Product already in cart"
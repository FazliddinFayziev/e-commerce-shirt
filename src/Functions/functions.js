
export const pathCart = (pathname, setCart) => {
    if (pathname === '/cartItem' || pathname === '/shipping') {
        setCart(true);
    } else {
        setCart(false);
    }
}

export const pathShipping = (pathname, setShip, cartItems) => {
    if (cartItems.length > 0 && pathname === '/shipping') {
        setShip(true);
    } else {
        setShip(false);
    }
}

export const formatPrice = (price) => {
    const priceString = price.toString();
    const formattedPrice = priceString.split('').reverse().join('').replace(/(\d{3}(?=\d))/g, '$1 ').split('').reverse().join('');
    return formattedPrice;
};



// Functions/functions.js

// Filter Category and Options
export const filterActiveProduct = (activeCategory, activeOptions, products) => {
    if (activeCategory === 'All') {
        if (activeOptions === 'All') {
            return products;
        } else {
            return products.filter((product) => product.option === activeOptions);
        }
    } else {
        if (activeOptions === 'All') {
            return products.filter((product) => product.category === activeCategory);
        } else {
            return products.filter((product) => product.category === activeCategory && product.option === activeOptions);
        }
    }
};

// Filter Category and Options
export const filterAvailableOptions = (activeCategory, products) => {
    if (activeCategory === 'All') {
        return products
    } else {
        return products.filter((product) => product.category === activeCategory);
    }
};

// New Set for Filtering all products based on their Options
export const filterOptions = (objectOfProducts) => {
    const arrayOfOptions = objectOfProducts.map((obj) => obj.option);
    return Array.from(new Set(['All', ...arrayOfOptions]));
};

// New Set for Filtering all products based on their Category
export const filterCategory = (objectOfProducts) => {
    const arrayOfCategories = objectOfProducts.map((obj) => obj.category);
    return Array.from(new Set(['All', ...arrayOfCategories]));
};



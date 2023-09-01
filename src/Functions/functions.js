
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
export const filterActiveProduct = (activeCategory, activeOptions, activeColor, products) => {
    return products.filter((product) => {
        const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
        const optionsMatch = activeOptions === 'All' || product.option === activeOptions;
        const colorMatch = activeColor === 'All' || product.colors.includes(activeColor);
        return categoryMatch && optionsMatch && colorMatch;
    });
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

// New Set for Filtering all products based on their Colors
export const filterColors = (objectOfProducts) => {
    const arrayOfColors = objectOfProducts.map((obj) => obj.colors[0]);
    return Array.from(new Set(['All', ...arrayOfColors]));
};

// Filter products based on user liked products
export const filterLikedProducts = (arrayOfProducts, currentCategory, id) => {
    const arrayOfLikedProducts = arrayOfProducts.filter(
        (obj) => obj.id !== id && obj.category === currentCategory
    );
    return arrayOfLikedProducts;
};




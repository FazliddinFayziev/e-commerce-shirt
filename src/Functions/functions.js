
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


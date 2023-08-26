
export const pathCart = (pathname, setCart) => {
    if (pathname === '/cartItem' || pathname === '/shipping') {
        setCart(true);
    } else {
        setCart(false);
    }
}

export const pathShipping = (pathname, setShip) => {
    if (pathname === '/shipping') {
        setShip(true);
    } else {
        setShip(false);
    }
}


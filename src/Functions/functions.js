
const pathCart = (pathname, setCart) => {
    if (pathname === '/cartItem') {
        setCart(true);
    } else {
        setCart(false);
    }
}

export default pathCart
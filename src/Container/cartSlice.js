import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        // Add to card
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                state.totalPrice += (newItem.price * newItem.quantity)
            } else {
                state.cartItems.push(newItem);
                state.totalPrice += (newItem.price * newItem.quantity)
            }
        },

        // Remove from Card
        removeFromCart: (state, action) => {
            const { itemId } = action.payload;
            const itemToDelete = state.cartItems.find(item => item.id === itemId);
            state.totalPrice -= (itemToDelete.price * itemToDelete.quantity)
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        },

        // updateQuantity
        updateQuantity: (state, action) => {
            const { itemId } = action.payload;
            const itemToUpdate = state.cartItems.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity++;
                state.totalPrice += itemToUpdate.price
            }
        },

        // decreaseQunatity
        decreaseQuantity: (state, action) => {
            const { itemId } = action.payload;
            const itemToUpdate = state.cartItems.find(item => item.id === itemId);
            if (itemToUpdate) {
                if (itemToUpdate.quantity > 1) {
                    itemToUpdate.quantity--;
                    state.totalPrice -= itemToUpdate.price
                }
            }
        },

    },
});

export const { addToCart, removeFromCart, updateQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer
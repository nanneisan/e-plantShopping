import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        state.items = [...state.items, {...action.payload, quantity: 1}]
    },
    removeItem: (state, action) => {
        const items = state.items.filter(item => item.name !== action.payload);
        state.items = items;
    },
    updateQuantity: (state, action) => {
        const {name, amount} = action.payload;
        const itemIndex = state.items.findIndex(item => item.name === name);
        if(itemIndex >= 0){
            if(amount > 0){
                state.items[itemIndex].quantity = amount;
            } 
            
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

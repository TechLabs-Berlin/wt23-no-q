import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartItems = create(
    persist(
        set => ({
            cartItemsArray: [],
            newCartItems: cartItems => {
                set(state => {
                    return { cartItemsArray: [...state.cartItemsArray, cartItems] };
                });
            },
        }),
        {
            name: 'cartItemsArray', // unique name
            getStorage: () => localStorage,
        }
    )
);
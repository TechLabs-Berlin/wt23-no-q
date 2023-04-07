import { create } from 'zustand';
import { persist } from 'zustand/middleware';




export const useCart = create(
    persist(
        (set) => ({
            total: 0,
            totalqty: 0,
            cartContent: [],
            addTocart: (product) => {
                set((state) => ({
                    totalqty: state.totalqty + 1,
                    total: state.total + parseFloat(product.price),
                    cartContent: [...state.cartContent, product],
                }));
            },
            updatecart: ({ product, cartItems }) => {
                set((state) => ({
                    totalqty: state.totalqty + 1,
                    total: state.total + parseFloat(product.price),
                    cartContent: cartItems,
                }));
            },
            clearCart: () => set({ totalqty: 0, total: 0, cartContent: [] }),
            removeFromCart: (product) =>
                set((state) => ({
                    total: state.total - product.price * product.qty,
                    totalqty: state.totalqty - product.qty,
                    cartContent: state.cartContent.filter((item) => item.id !== product.id),
                })),
        }),
        {
            name: 'cart',
            getStorage: () => localStorage,
        }
    )
);
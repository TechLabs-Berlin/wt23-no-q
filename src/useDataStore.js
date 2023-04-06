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
            name: 'cartItemsArray',
            getStorage: () => localStorage,
        }
    )
);

//#region
// export const useCartItems = create(
//     persist(
//         (set, get) => ({
//             total: 0,
//             totalqty: 0,
//             cartContent: [],
//             addTocart: (product) => {
//                 set((state) => ({
//                     totalqty: state.totalqty + 1,
//                     total: state.total + parseFloat(product.price),
//                     cartContent: [...state.cartContent, product],
//                 }));
//             },
//             updatecart: ({ product, cartItems }) => {
//                 set((state) => ({
//                     totalqty: state.totalqty + 1,
//                     total: state.total + parseFloat(product.price),
//                     cartContent: cartItems,
//                 }));
//             },
//             clearCart: () => set({ totalqty: 0 total: 0, cartContent: [] }),
//             removeFromCart: (product) =>
//                 set((state) => ({
//                     total: state.total - product.price * product.quantity,
//                     totalqty: state.totalqty - product.quantity,
//                     cartContent: state.cartContent.filter(
//                         (item) => item.id !== product.id
//                     ),
//                 })),
//         }),
//         {
//             name: 'cartItemsArray',
//             getStorage: () => localStorage,
//         }
//     )
// );
//#endregion
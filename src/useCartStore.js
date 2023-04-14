import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  setCartItems: (cartItems) => {
    set(() => ({ cartItems }));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  },
  addItem: (product) => {
    set((state) => {
      const exist = state.cartItems.find((x) => x.id === product.id);
      if (exist) {
        const newCartItems = state.cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        );
        return { cartItems: newCartItems };
      } else {
        const newCartItems = [...state.cartItems, { ...product, qty: 1 }];
        return { cartItems: newCartItems };
      }
    });
  },
  removeItem: (product) => {
    set((state) => {
      const exist = state.cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        const newCartItems = state.cartItems.filter((x) => x.id !== product.id);
        return { cartItems: newCartItems };
      } else {
        const newCartItems = state.cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        );
        return { cartItems: newCartItems };
      }
    });
  },
  getTotalQuantity: () => {
    const { cartItems } = useCartStore.getState();
    let totalQty = 0;
    cartItems.forEach((item) => {
      totalQty += item.qty;
    });
    return totalQty;
  },
  clearCart: () => {
    set(() => ({
      cartItems: [],
      totalQuantity: 0,
    }));
    localStorage.removeItem('cartItems'); // Remove cart items from localStorage
  },
}));






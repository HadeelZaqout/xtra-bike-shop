import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type CartState = { [id: string]: number };
type WishlistState = Set<string>;

interface ShopState {
  cart: CartState;
  wishlist: WishlistState;
}

type ShopAction =
  | { type: 'ADD_TO_CART'; payload: string }
  | { type: 'CHANGE_QTY'; payload: { id: string; delta: number } }
  | { type: 'TOGGLE_WISHLIST'; payload: string };

const initialState: ShopState = {
  cart: {},
  wishlist: new Set(),
};

function shopReducer(state: ShopState, action: ShopAction): ShopState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const id = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: (state.cart[id] || 0) + 1,
        },
      };
    }
    case 'CHANGE_QTY': {
      const { id, delta } = action.payload;
      if (!state.cart[id]) return state;
      const newQty = state.cart[id] + delta;
      const newCart = { ...state.cart };
      if (newQty <= 0) {
        delete newCart[id];
      } else {
        newCart[id] = newQty;
      }
      return { ...state, cart: newCart };
    }
    case 'TOGGLE_WISHLIST': {
      const id = action.payload;
      const newWishlist = new Set(state.wishlist);
      if (newWishlist.has(id)) {
        newWishlist.delete(id);
      } else {
        newWishlist.add(id);
      }
      return { ...state, wishlist: newWishlist };
    }
    default:
      return state;
  }
}

interface ShopContextProps {
  state: ShopState;
  addToCart: (id: string) => void;
  changeQty: (id: string, delta: number) => void;
  toggleWishlist: (id: string) => void;
}

const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (id: string) => dispatch({ type: 'ADD_TO_CART', payload: id });
  const changeQty = (id: string, delta: number) => dispatch({ type: 'CHANGE_QTY', payload: { id, delta } });
  const toggleWishlist = (id: string) => dispatch({ type: 'TOGGLE_WISHLIST', payload: id });

  return (
    <ShopContext.Provider value={{ state, addToCart, changeQty, toggleWishlist }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}

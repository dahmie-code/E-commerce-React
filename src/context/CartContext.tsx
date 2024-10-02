import { createContext, useReducer, ReactNode } from 'react';
import { cartReducer, CartItem, Product } from './cartReducer';

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  cartItemCount: number;
};
// CartState Type
type CartState = {
  cartItems: CartItem[];
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

const initialCartState: CartState = {
  cartItems: [],
};

// CartProvider Component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }; 

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const increaseQuantity = (id: string) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id: string) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const cartItemCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems: state.cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
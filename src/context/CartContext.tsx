import { createContext, useReducer, ReactNode } from 'react';
import { cartReducer, CartItem, Product } from './cartReducer';

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  cartItemCount: number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

const initialCartState = {
  cartItems: [] as CartItem[],
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Add product to cart
  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Remove product from cart
  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Calculate the total cart item count
  const cartItemCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};



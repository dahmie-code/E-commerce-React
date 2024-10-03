export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

// CartState Type
type CartState = {
  cartItems: CartItem[];
};

// Cart Actions
type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'INCREASE_QUANTITY'; payload: string }
  | { type: 'DECREASE_QUANTITY'; payload: string };

  
// Cart Reducer
export const cartReducer = (state: CartState, action: CartAction): CartState => {
  console.log("Reducer action:", action); 
  console.log("Current state:", state); 

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.cartItems.find(item => item.id === action.payload.id);
      if (existingProduct) {
        // If the product already exists, increment its quantity
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      // If the product is new, add it to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    }
    case 'INCREASE_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    case 'DECREASE_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };
    }
    default:
      return state;
  }
};
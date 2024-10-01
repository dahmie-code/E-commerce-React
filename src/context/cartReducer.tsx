
export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  
  export type CartItem = Product & {
    quantity: number;
  };
  
  type CartState = {
    cartItems: CartItem[];
  };
  
  type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: string };
  
  export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingProduct = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingProduct) {
                // If the product is already in the cart, increase its quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            // If the product is new, add it to the cart with quantity 1
            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
            };
        }
        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            };
        }
      default:
        return state;
    }
  };
  
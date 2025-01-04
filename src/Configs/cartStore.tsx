import { create } from 'zustand';

type SelectedVariants = {
  color: string | null; // Allow null
  size: string | string[] | { price: string; quantity: string; };
};

interface PriceRange {
  range: string;
  price: string;
  minQuaantity?: number; // Optional minQuantity
  maxQuantity?: number; // Optional maxQuantity
}

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
  selectedPriceRange?: PriceRange | null;
  selectedVariants?: SelectedVariants | null;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
  removeFromCart: (uniqueId: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      // Helper function to get min and max quantities from a price range string
      const getMinMaxQuantityFromRange = (range: string) => {
        const [minQuantity, maxQuantity] = range.split('-').map((value) => parseInt(value.trim(), 10));
        return {
          minQuantity: minQuantity || 1, // Default to 1 if minQuantity is missing or invalid
          maxQuantity: maxQuantity || 100, // Default to 100 if maxQuantity is missing or invalid
        };
      };

      // Get min and max quantity from the selected price range
      const { minQuantity, maxQuantity } = getMinMaxQuantityFromRange(item.selectedPriceRange?.range || '1-1');

      // Check if the item already exists in the cart
      const existingItem = state.cart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedPriceRange?.range === item.selectedPriceRange?.range
      );

      if (existingItem) {
        // If the item already exists, increase its quantity within the allowed range
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id &&
            cartItem.selectedPriceRange?.range === item.selectedPriceRange?.range
              ? {
                  ...cartItem,
                  quantity: Math.min(cartItem.quantity + 1, maxQuantity), // Limit quantity to maxQuantity
                }
              : cartItem
          ),
        };
      }

      // If the item doesn't exist, add it to the cart with the minimum quantity
      return {
        cart: [
          ...state.cart,
          { ...item, quantity: minQuantity },
        ],
      };
    }),

  updateQuantity: (uniqueId, quantity) =>
    set((state) => {
      // Check if the item exists and if we can update its quantity
      const itemToUpdate = state.cart.find(
        (item) => `${item.id}-${item.selectedPriceRange?.range || 'default'}` === uniqueId
      );

      if (itemToUpdate) {
        // Get min and max quantity from the selected price range
        const { minQuantity, maxQuantity } = getMinMaxQuantityFromRange(itemToUpdate.selectedPriceRange?.range || '1-1');

        // Validate the new quantity within the allowed range
        const validQuantity = Math.max(minQuantity, Math.min(quantity, maxQuantity));

        return {
          cart: state.cart.map((item) =>
            `${item.id}-${item.selectedPriceRange?.range || 'default'}` === uniqueId
              ? { ...item, quantity: validQuantity }
              : item
          ),
        };
      }

      return state;
    }),

  removeFromCart: (uniqueId) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => `${item.id}-${item.selectedPriceRange?.range || 'default'}` !== uniqueId
      ),
    })),
}));

// Helper function for extracting min and max quantity from a price range string
const getMinMaxQuantityFromRange = (range: string) => {
  const [minQuantity, maxQuantity] = range.split('-').map((value) => parseInt(value.trim(), 10));
  return {
    minQuantity: minQuantity || 1, // Default to 1 if minQuantity is missing or invalid
    maxQuantity: maxQuantity || 100, // Default to 100 if maxQuantity is missing or invalid
  };
};

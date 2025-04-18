import { create } from 'zustand';

interface Buyer {
  id: string;
  email: string;
  fullName: string;
  token: string;
}

interface AccountStore {
  buyer: Buyer | null;
  setBuyerData: (buyer: Buyer) => void;
  clearBuyer: () => void;
}

const useAccountStore = create<AccountStore>((set) => ({
  buyer: null,
  setBuyerData: (buyer) => set({ buyer }),
  clearBuyer: () => set({ buyer: null }), // Method to clear buyer
}));

export default useAccountStore;

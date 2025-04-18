export type ShippingAddressFormType = {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    isDefault: boolean;
};

export type DefaultValuesType = {
    buyerId: string;
    shippingAddressId: string;
    items: {
        productId: string;
        variations: {
            trait: string;
            value: string;
            price: number;
            quantity: number;
        }[];
    }[];
    orderNote: string;
    advancePayment: number;
    paymentMethod: 'cash_on_delivery' | 'credit_card' | 'paypal' | 'bank_transfer';
};
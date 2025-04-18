interface PriceRange {
    start_quantity: number;
    end_quantity: number;
    price: number;
    _id: string;
}

interface VariationOption {
    name: string;
    values: string[];
    _id: string;
}

interface ShopInfo {
    _id: string;
    shopName: string;
    createdAt: string;
}

interface PackageDetails {
    weight: number;
    length: number;
    width: number;
    height: number;
}

interface ProductImage {
    data: string;
    isMain: boolean;
    _id: string;
}

interface Variant {
    variations: Record<string, string>;
    quantity: number;
    price: number;
    _id: string;
}

interface Metadata {
    createdAt: string;
}

export interface ApiResponse {
    _id: string;
    pk: string;
    sk: string;
    shop: ShopInfo;
    shopId: string;
    seller: string;
    sellerId: string;
    images: ProductImage[];
    product_name: string;
    category: string;
    description: string;
    price_ranges: PriceRange[];
    default_price: number;
    variation_options: VariationOption[];
    variants: Variant[];
    is_active: boolean;
    stock_quantity: number;
    package_details: PackageDetails;
    contains_dangerous_goods: boolean;
    dangerous_goods_type: null;
    status: string;
    metadata: Metadata;
    createdAt: string;
    updatedAt: string;
    __v: number;
    classifications: string[];
}

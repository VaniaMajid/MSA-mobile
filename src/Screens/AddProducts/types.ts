// Types for the Product Form
export interface AddProductsFormType {
  images: string[];          // At least 5 images
  nameEn: string;           // Product name in English
  nameUr: string;           // Product name in Urdu
  category: string;         // Selected from a list of categories
  range1: string;           // Range 1
  price1: number;           // Price for Range 1
  range2?: string;          // Range 2 (optional)
  price2?: number;          // Price for Range 2 (optional)
  range3?: string;          // Range 3 (optional)
  price3?: number;          // Price for Range 3 (optional)
  packageWeight: number;    // Weight of the package
  packageLength: number;     // Length of the package
  packageWidth: number;      // Width of the package
  packageHeight: number;     // Height of the package
  isFragile?: boolean;       // Checkbox for fragile goods
}

export type ProductSpecs = Record<string, string>;

export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  subcategory?: string;
  product_type?: string;
  video: string | null;
  images: string[];
  price: number;
  discount: number;
  description: string;
  product_specs: Record<string, string | string[] | undefined>;
  rating: number;
  reviews: Review[];
  sku: string;
  availabilityStatus: string;
  stock: number;
  shippingInformation: string;
  returnPolicy: string;
  minimumOrderQuantity?: { qty: number, price: number }[];
  sizes?: { size: string, price: number }[]|undefined;
  colors?: string[];
  updatedAt: string
  sales: number
  isTrending?: boolean | undefined
  link?: string
}



export interface Review {
  username: string;
  rating: number;
  reviewTitle: string;
  comment: string;
  image?:string
  date: string;
}


export interface CartItem {
  product: Product
  basePrice: number,         // original per-piece price
  finalPrice: number,        // discounted per-piece price
  discount: number,          // applied discount %
  totalprice: number, ProductConfig: {
    color?: string;
    size?: string;
    price?: number;
    quantity: number;
  }
  attributes?: { name: string, value: string }[]
  sku?: string
  selected?: boolean
}

export interface WishlistItem extends Product {
  product: Product
}
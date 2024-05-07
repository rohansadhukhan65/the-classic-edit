export interface Product {
    ProductID: string;
    ProductTitle: string;
    description: string;
    Price: number;
    currency: string;
    category: string;
    collection: string;
    ImageUrl: string;
    images: string[];
    ProductSizeArray: string[];
    colors: string[];
    ProductReviewCount: number;
    ProductStarCount: number;
    DiscountPrice: number;
    stock: number;
  }
  

  export interface Collection {
    name: string;
    description: string;
    image: string;
    modelImage : string;
  }
  
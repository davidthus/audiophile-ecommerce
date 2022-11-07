export interface Product {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: {
    first: CategoryImage;
    second: CategoryImage;
    third: CategoryImage;
  };
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

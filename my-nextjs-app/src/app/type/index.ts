export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    rating: number; // e.g. 4.5
    stock: number; // available quantity
    image: string;
}

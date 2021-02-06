import { ICategory } from "../Extras/Categories/interfaces";
import { IBrand } from "../Extras/Brands/interfaces";
import { IShop } from "../Extras/Shops/interfaces";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    createAt: Date;
    updatedAt: Date;
    category: ICategory;
    shop: IShop;
    brand: IBrand;
}

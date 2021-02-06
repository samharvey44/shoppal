import { IShop } from "../Extras/Shops/interfaces";

export interface IList {
    id: number;
    name: string;
    complete: boolean;
    notes: string;
    shop: IShop;
    createdAt: Date;
    updatedAt: Date;
}

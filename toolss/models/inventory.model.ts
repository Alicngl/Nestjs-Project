import mongoose from "mongoose";
import { AuditModel } from "./audit.model";
import { InventoryTypeModel } from "./inventory-type.model";
import { ProductModel } from "./product.model";

export class InventoryModel {
    id: string;
    barcode: number;
    description: string;
    type: InventoryTypeModel;
    product: ProductModel;
}

export const InventorySchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    surname: String,
    email: String,
    birthDay: Date,
    audit: Object,
})
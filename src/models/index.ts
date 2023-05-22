import mongoose from "mongoose";
import CategorySchema, { CategoryDoc } from "./Category";
import ProductSchema, { ProductDoc } from "./Product";
import UserSchema, { UserDoc } from "./User";

const UserModel = mongoose.model<UserDoc>("User", UserSchema);
const ProductModel = mongoose.model<ProductDoc>("Product", ProductSchema);
const CategoryModel = mongoose.model<CategoryDoc>("Category",CategorySchema)

export { CategoryModel };
export { ProductModel };
export { UserModel };

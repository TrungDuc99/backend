import mongoose from 'mongoose'
import CategorySchema, { CategoryDoc } from './Category'
import ProductSchema, { ProductDoc } from './Product'
import UserSchema, { UserDoc } from './User'
import CommentSchema, { CommentDoc } from './Comment'
import PostSchema, { PostsDoc } from './Posts'
import CartSchema, { CartDoc } from './Cart'

const UserModel = mongoose.model<UserDoc>('User', UserSchema)
UserModel.collection.createIndex({ name: 'text', email: 'text' })
const ProductModel = mongoose.model<ProductDoc>('Product', ProductSchema)
const CategoryModel = mongoose.model<CategoryDoc>('Category', CategorySchema)
const CommentModel = mongoose.model<CommentDoc>('Comment', CommentSchema)
const PostsModel = mongoose.model<PostsDoc>('Post', PostSchema)
const CartModel = mongoose.model<CartDoc>('Cart', CartSchema)

export { CategoryModel }
export { ProductModel }
export { UserModel }
export { CommentModel }
export { PostsModel }
export { CartModel }

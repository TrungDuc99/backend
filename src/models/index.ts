import mongoose from 'mongoose'
import CategorySchema, { CategoryDoc } from './Category'
import ProductSchema, { ProductDoc } from './Product'
import UserSchema, { UserDoc } from './User'
import CommentSchema, { CommentDoc } from './Comment'
import PostSchema, { PostDoc } from './Post'

const UserModel = mongoose.model<UserDoc>('User', UserSchema)
const ProductModel = mongoose.model<ProductDoc>('Product', ProductSchema)
const CategoryModel = mongoose.model<CategoryDoc>('Category', CategorySchema)
const CommentModel = mongoose.model<CommentDoc>('Comment', CommentSchema)
const PostModel = mongoose.model<PostDoc>('Post', PostSchema)

export { CategoryModel }
export { ProductModel }
export { UserModel }
export { CommentModel }
export { PostModel }

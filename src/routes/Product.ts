import { Router } from 'express'

import ProductCallback from '../controller/Product'
const ProductRouter = Router()

ProductRouter.get('/', ProductCallback.get)
ProductRouter.post('/', ProductCallback.create)
ProductRouter.put('/', ProductCallback.update)
ProductRouter.delete('/:id', ProductCallback.delete)
ProductRouter.get('/:id', ProductCallback.getOnlyProduct)
export default ProductRouter

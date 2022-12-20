import { Router } from 'express'
import { createProduct, getProduct, getProducts } from '../controllers/products.js'

const router = Router()
router.post('/', createProduct)
router.get('/:id', getProduct)
router.get('/', getProducts)

export default router

import { Router } from 'express'
import { createProduct } from '../controllers/products.js'

const router = Router()
router.post('/', createProduct)

export default router

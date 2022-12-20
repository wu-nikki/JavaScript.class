import { Router } from 'express'
import { createUser, addCart } from '../controllers/users.js'

const router = Router()

router.post('/', createUser)
router.post('/:id/cart', addCart)

export default router

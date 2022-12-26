import { Router } from 'express'
import { createUser, loginUser } from '../controllers/users.js'
import { login } from '../middleware/auth.js'

const router = Router()

router.post('/', createUser)
router.post('/login', login, loginUser)
export default router

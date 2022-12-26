import { Router } from 'express'
import { createUser, loginUser, getCurrentUser } from '../controllers/users.js'
import { login, jwt } from '../middleware/auth.js'

const router = Router()

router.post('/', createUser)
router.post('/login', login, loginUser)
router.get('/me', jwt, getCurrentUser)
export default router

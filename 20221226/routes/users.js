import { Router } from 'express'
import { createUser, loginUser, getCurrentUser, editUserAvstar, logoutUser } from '../controllers/users.js'
import { login, jwt } from '../middleware/auth.js'
import upload from '../middleware/upload.js'

const router = Router()

router.post('/', createUser)
router.post('/login', login, loginUser)
router.get('/me', jwt, getCurrentUser)
router.patch('/avatar', jwt, upload, editUserAvstar)
router.delete('/logout', jwt, logoutUser)
export default router

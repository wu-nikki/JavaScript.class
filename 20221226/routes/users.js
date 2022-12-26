import { Router } from 'express'
import { createUser, loginUser, getCurrentUser, editUserAvstar } from '../controllers/users.js'
import { login, jwt } from '../middleware/auth.js'
import upload from '../middleware/upload.js'

const router = Router()

router.post('/', createUser)
router.post('/login', login, loginUser)
router.get('/me', jwt, getCurrentUser)
router.patch('/avatar', jwt, upload, editUserAvstar)

export default router

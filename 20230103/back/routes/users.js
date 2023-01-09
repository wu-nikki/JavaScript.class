import { Router } from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import { register, login, logout, extend, getUser } from '../controllers/users.js'

const router = Router()
router.post('/', content('application/json'), register)

// 登入
router.post('/login', content('application/json'), auth.login, login)

// 登出
router.delete('/logout', auth.jwt, logout)
// 把舊的jwt更新成新的
router.patch('/extend', auth.jwt, extend)
// 使用者
router.get('/me', auth.jwt, getUser)

export default router

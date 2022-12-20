import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import mongoSanitize from 'express-mongo-sanitize'
import cors from 'cors'

import productsRoute from './routes/products.js'
import usersRoute from './routes/users.js'

mongoose.connect(process.env.DB_URL)
mongoose.set('sanitizeFilter', true)

const app = express()

app.use(cors())

app.use(express.json())
app.use((_, req, res, next) => {
  res.status(400).json({ success: false, message: '資料格式錯誤' })
})

app.use(mongoSanitize())

app.use('/products', productsRoute)
app.use('/users', usersRoute)

app.all('*', (req, res) => {
  res.status(404).json({ success: false, message: '找不到' })
})

app.listen(process.env.PORT || 4000, () => {
  console.log('伺服器開啟')
})

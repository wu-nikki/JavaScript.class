import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'

import productsRoute from './routes/products.js'

mongoose.connect(process.env.DB_URL)

const app = express()

app.use(express.json())

app.use('/products', productsRoute)

app.listen(process.env.PORT || 4000, () => {
  console.log('伺服器開啟')
})

import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/users.js'
import './passport/passport.js'

mongoose.connect(process.env.DB_URL)

const app = express()

app.use(express.json())

app.use('/users', userRoute)
app.listen(process.env.PORT || 4000, () => {
  console.log('伺服器啟動')
})

// env
// DB_URL=mongodb+srv://nikki851205:Nn0922335584@cluster0.nvicjnu.mongodb.net/20221226

// JWT_SECRET=20221226

// CLOUDINARY_NAME=dgsdfnhhp
// CLOUDINARY_KEY=847626483916576
// CLOUDINARY_SECRET=AzKkyrttcvvOsnBoj5H0udoimEg

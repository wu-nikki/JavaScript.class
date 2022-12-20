import products from '../models/products.js'
import util from 'util'

export const createProduct = async (req, res) => {
  try {
    const result = await products.create(req.body)
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).json({ success: false, message })
    } else {
      res.status(500).json({ success: false, message: '未知錯誤' })
    }
  }
}

export const getProduct = async (req, res) => {
  try {
    const result = await products.findById(req.params.id)
    if (result) {
      res.status(200).json({ success: true, message: '', result })
    } else {
      res.status(404).json({ success: false, message: '找不到商品' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).json({ success: false, message: 'ID 格式錯誤' })
    } else {
      res.status(500).json({ success: false, message: '未知錯誤' })
    }
  }
}

export const getProducts = async (req, res) => {
  try {
    // {
    //   $and: [
    //     { name: /皮件/i },
    //     { price: { $lte: 500 } }
    //   ]
    // }
    const query = { $and: [] }
    if (req.query.pricegte) {
      const gte = parseInt(req.query.pricegte)
      if (!isNaN(gte)) {
        query.$and.push({ price: { $gte: gte } })
      }
    }
    if (req.query.pricelte) {
      const lte = parseInt(req.query.pricelte)
      if (!isNaN(lte)) {
        query.$and.push({ price: { $lte: lte } })
      }
    }
    if (req.query.category) {
      query.$and.push({ category: req.query.category })
      // query.$and.push({ category: { $eq: req.query.category } })
    }
    if (req.query.keywords) {
      const keywords = req.query.keywords.split(' ').filter(keyword => keyword.length > 0)
      const names = []
      for (const keyword of keywords) {
        names.push(new RegExp(keyword, 'i'))
      }
      query.$and.push({ name: { $in: names } })
    }
    console.log(util.inspect(query, true, null))
    // .sort({ 欄位名: 1 正序 -1 倒序 })
    // $and 不能是空陣列，所以加判斷
    const result = await products.find(query.$and.length > 0 ? query : {}).sort({ price: -1 })
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: '未知錯誤' })
  }
}

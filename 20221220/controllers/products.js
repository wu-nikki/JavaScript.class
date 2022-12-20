import products from '../models/products.js'
// util=> nodejs內建的
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
    }
  }
}

export const getProducts = async (req, res) => {
  try {
    // {
    //   $and: [
    //     { name: / 皮件 /i },
    //     { price: { $lte: 500 } }
    //   ]
    // }
    //  大於等於固定用gte
    const query = { $and: [] }
    if (req.query.pricegte) {
      const gte = parseInt(req.query.pricegte)
      if (!isNaN(gte)) {
        query.$and.push({ price: { $gte: gte } })
      }
    }
    // 小於等於固定用lte
    if (req.query.pricelte) {
      const lte = parseInt(req.query.pricelte)
      if (!isNaN(lte)) {
        query.$and.push({ price: { $lte: lte } })
      }
    }
    // 分類過濾
    if (req.query.category) {
      query.$and.push({ category: req.query.category })
      // query.$and.push({ category: { $eq: req.query.category } })
    }

    // 關鍵字查詢
    if (req.query.keywords) {
      const keywords = req.query.keywords.split(' ').filter(keyword => keyword.length > 0)
      const names = []
      for (const keyword of keywords) {
        // i 不分大小寫
        names.push(new RegExp(keyword, 'i'))
      }
      // $in 包含
      query.$and.push({ name: { $in: names } })
    }

    // 2是空白縮排
    //  {
    //    "price": {

    // console.log(JSON.stringify(query, null, 2))

    // 用這個關鍵字查詢才會跑出來
    console.log(util.inspect(query, true, null))
    // .sort({ 欄位名: 1 正序 -1 倒敘})
    // $and不能是空陣列，所以加判斷
    const result = await products.find(query.$and.length > 0 ? query : {}).sort({ price: 1 })
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    res.status(500).json({ success: false, message: '未知錯誤' })
  }
}

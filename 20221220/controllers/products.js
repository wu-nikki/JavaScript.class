import products from '../models/products.js'

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
    // 2是空白縮排
    //  {
    //    "price": {
    console.log(JSON.stringify(query, null, 2))

    const result = await products.find(query)
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    res.status(500).json({ success: false, message: '未知錯誤' })
  }
}

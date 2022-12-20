import users from '../models/users.js'

export const createUser = async (req, res) => {
  try {
    let result = await users.create(req.body)
    // 將查詢結果的 mongoose Document 物件轉為一般的 {}
    result = result.toObject()
    // 移除密碼欄位
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).json({ success: false, message })
    } else if (error.name === 'MongoServerError' && error.code === 11000) {
      res.status(409).json({ success: false, message: '帳號已使用' })
    } else {
      res.status(500).json({ success: false, message: '未知錯誤' })
    }
  }
}

import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    require: [true, '缺少商品名稱']
  },
  price: {
    type: Number,
    require: [true, '缺少商品價格'],
    min: [0, '商品價格不能小於0']
  },
  category: {
    type: String,
    require: [true, '缺少商品分類'],
    // enum 限制欄位的值只能是陣列裡面的其中一個
    enum: {
      values: ['皮件', '鞋', '飾品', '衣服', '遊戲', '3C'],
      // {VALUE}會自動寫傳入的值
      message: '找不到{VALUE}分類'

    }
  }
}, { versionKey: false })

export default model('products', schema)

import passport from 'passport'
import bcrypt from 'bcrypt'
import passportLocal from 'passport-local'
import users from '../models/users.js'

// 引用 passport 的驗證策略
const LocalStrategy = passportLocal.Strategy

// 使用驗證策略寫驗證方式
// passport.use(驗證方式名稱, 策略)
passport.use('login', new LocalStrategy({
// 預設帳號密碼使用的欄位是 username 和 password
// 所以設定改為跟資料庫欄位一樣
  usernameField: 'account',
  passwordField: 'password'
}, async (account, password, done) => {
// done(錯誤,傳到下一步的資料，放進info的內容)
  try {
    const user = await users.findOne({ account })
    if (!user) {
      return done(null, false, { message: '帳號不存在' })
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: '密碼錯誤' })
    }
    return done(null, user)
  } catch (error) {
    return done(error, false)
  }
}
))

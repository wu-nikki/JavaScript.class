import passport from 'passport'

export const login = (req, res, next) => {
  // 使用 login 驗證方式
  // { session: false } 停用 cookie
  // (error, user, info) 對應到驗證方式 done 的三個參數值
  passport.authenticate('login', { session: false }, (error, user, info) => {
    if (error || !user) {
      // POST 進來的資料少了 usernameField 和 passwordField 定義的欄位
      if (info.message === 'Missing credentials')info.message = '欄位錯誤'
      res.status(400).json({ success: false, message: info.message })
      return
    }
    // 把查詢到的 user 放進 req 裡面給之後的處理使用
    req.user = user
    // 繼續下一個 middleware
    next()
  })(req, res, next)
}

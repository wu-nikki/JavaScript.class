// 引用 dotenv 讀取 .env 檔的設定
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
// 引用 axios
import axios from 'axios'
// 引用 Flex 模板
import flex from './flex.js'

// 關閉 https 驗證檢查
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

// 設定 linebot
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    try {
      const { data } = await axios.get('https://apiservice.mol.gov.tw/OdService/download/A17000000J-000007-DR7')
      // const course = data.find(courses => {
      //   return courses.BCM_SNO === event.message.text
      // })
      const course = data.find(courses => courses.BCM_SNO === event.message.text)
      if (course) {
        // 複製模板
        const replyFlex = JSON.parse(JSON.stringify(flex))
        // 修改內容
        replyFlex.body.contents[0].text = course.CLASSNAME
        replyFlex.body.contents.push({
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '訓練時間',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: course.TRAINING_PERIOD,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        })
        replyFlex.footer.contents[0].action.uri = course.URL
        event.reply({
          type: 'flex',
          altText: '查詢結果',
          contents: replyFlex
        })
      } else {
        event.reply('找不到課程')
      }
    } catch (error) {
      console.log(error)
      event.reply('發生錯誤，請稍後再試')
    }
  }
})

// linebot 偵測指定 port 的指定路徑請求
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

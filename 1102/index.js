
import 'dotenv/config'
import linebot from 'linebot'
// import axios from 'axios'
// import flex from './flex.js'
// import { scheduleJob } from 'node-schedule'
// import fetchCourse from './common/fetchCourse.js'
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// const ans = async () => {
//   const { data } = await axios.get('https://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json')
//   const list = data.XML_Head.Infos.Info
//   const region = list.find((course) => {
//     return course.Region === '桃園市'
//   })
//   console.log(region)
// }
// ans()

// 先做請求再從迴圈拉資料 (用定時器更新)
// node-schedule

// bot.on('message', async (event) => {
//   if (event.message.type === 'text') {
//     try {
//       const { data } = await axios.get('https://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json')
//       const list = data.XML_Head.Infos.Info
//       // const region = list.filter((it) => { return it.Region === '桃園市' })
//       // console.log(region)
//       const course = list.find(courses => courses.Region === event.message.text)
//       console.log(course)
//       if (course) {
//         const replyFlex = JSON.parse(JSON.stringify(flex))
//         // 修改內容
//         replyFlex.body.contents[0].text = course.Name
//         replyFlex.body.contents.push({
//           type: 'box',
//           layout: 'vertical',
//           margin: 'lg',
//           spacing: 'sm',
//           contents: [
//             {
//               type: 'box',
//               layout: 'baseline',
//               spacing: 'sm',
//               contents: [
//                 {
//                   type: 'text',
//                   text: '地址',
//                   color: '#aaaaaa',
//                   size: 'sm',
//                   flex: 1
//                 },
//                 {
//                   type: 'text',
//                   text: course.Add,
//                   wrap: true,
//                   color: '#666666',
//                   size: 'sm',
//                   flex: 5
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               layout: 'baseline',
//               spacing: 'sm',
//               contents: [
//                 {
//                   type: 'text',
//                   text: '類別',
//                   color: '#aaaaaa',
//                   size: 'sm',
//                   flex: 1
//                 },
//                 {
//                   type: 'text',
//                   text: course.Orgclass,
//                   wrap: true,
//                   color: '#666666',
//                   size: 'sm',
//                   flex: 5
//                 }
//               ]
//             }
//           ]
//         })
//         replyFlex.footer.contents[0].action.uri = course.Tel
//         replyFlex.footer.contents[1].action.uri = course.Website
//         event.reply({
//           type: 'flex',
//           altText: '查詢結果',
//           contents: replyFlex
//         })
//       } else {
//         event.reply('查無')
//       }
//     } catch (error) {
//       console.log(error)
//       event.reply('發生錯誤，請稍後再試')
//     } console.log(event.message.text)
//   }
// })

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

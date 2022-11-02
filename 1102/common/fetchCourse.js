import axios from 'axios'

// cheerio 是解析套件
import * as cheerio from 'cheerio'

// export default async (event) => {
//   try {
//     const { data } = await axios.get('https://wdaweb.github.io/')
//     const $ = cheerio.load(data)
//     const courses = []
//     $('#general.card-title').each(function () {
//       courses.push($(this).text().trim())
//     })
//     event.reply(courses.join('\n'))
//   } catch (error) {
//     event.reply('發生錯誤')
//   }
// }

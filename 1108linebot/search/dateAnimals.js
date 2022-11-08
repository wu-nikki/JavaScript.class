import axios from 'axios'
import * as cheerio from 'cheerio'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wepet.tw/%E5%85%AC%E7%AB%8B%E9%A0%98%E9%A4%8A')
    const $ = cheerio.load(data)
    const names = []
    $('.media-events-list').each(function () {
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.hero.url = $(this).find('img').attr('src')
      bubble.body.contents[0].text = $(this).children('.media-body').find('h3').eq(0).text().trim()

      names.push(bubble)
    })
    event.reply({
      type: 'flex',
      altText: '每日九則寵物資訊查詢結果',
      contents: {
        type: 'carousel',
        contents: names
      }
    })
  } catch (error) {
    console.error(error)
  }
}

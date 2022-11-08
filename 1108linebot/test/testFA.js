import axios from 'axios'
import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.get('https://wepet.tw/%E5%85%AC%E7%AB%8B%E9%A0%98%E9%A4%8A')
    const $ = cheerio.load(data)
    const names = []
    $('.media-events-list .text-truncate').each(function () {
      names.push($(this).text())
    })
    console.log(names)
  } catch (error) {
    console.log(error)
  }
}
main()

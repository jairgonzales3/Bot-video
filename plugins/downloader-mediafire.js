import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ฐ๐ป๐ธ๐ณ๐พ ๐ณ๐ด ๐ผ๐ด๐ณ๐ธ๐ฐ๐ต๐ธ๐๐ด, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command} https://www.mediafire.com/file/6lhkvq8epwg9ouq/Metal_Slug_PC_Collection_by_Jhusz.rar/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*๐ฝ๐พ๐ผ๐ฑ๐๐ด:* ${filename}
*๐ฟ๐ด๐๐พ:* ${filesizeH}
*๐๐ธ๐ฟ๐พ:* ${ext}

*โณ ๐ด๐๐ฟ๐ด๐๐ด ๐ด๐ฝ ๐ป๐พ ๐๐๐ด ๐ด๐ฝ๐๐ธ๐พ ๐๐ ๐ฐ๐๐ฒ๐ท๐ธ๐๐พ. . . .* 
*_- ๐ฐ๐๐ฒ๐ท๐ธ๐๐พ๐ ๐ผ๐ฐ๐๐พ๐๐ด๐ ๐ฐ ๐ท00 ๐ผ๐ฑ ๐ฟ๐๐ด๐ณ๐ด ๐๐๐ด ๐ฝ๐พ ๐๐ด๐ฐ๐ฝ ๐ด๐ฝ๐๐ธ๐ฐ๐ณ๐พ๐_* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐ณ๐ด๐๐ฒ๐ฐ๐๐ถ๐ฐ๐ ๐ณ๐ด ๐ผ๐ด๐ณ๐ธ๐ฐ๐ต๐ธ๐๐ด',
body: 'สส ๐๐จ๐ญ๐๐ก๐ฎ๐ณแ  แทฆ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/IdkJhus`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ https://www.mediafire.com/file/6lhkvq8epwg9ouq/Metal_Slug_PC_Collection_by_Jhusz.rar/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler

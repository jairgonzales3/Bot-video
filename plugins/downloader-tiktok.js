import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, args}) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด/๐ป๐ธ๐ฝ๐บ ๐ณ๐ด ๐ฐ๐ป๐ถ๐๐ฝ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*#tiktok https://vm.tiktok.com/ZML42vSnn/*`
if (command == 'tiktokaudio') {
let espera = '*[โ๐๐๐๐โ] ๐ฐ๐ถ๐๐ฐ๐๐ณ๐ด ๐๐ฝ ๐ผ๐พ๐ผ๐ด๐ฝ๐๐พ ๐ด๐ฝ ๐ป๐พ ๐๐๐ด ๐ด๐ฝ๐๐ธ๐พ ๐๐ ๐ฐ๐๐ณ๐ธ๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'tiktok') {
let espera = '*[โ๐๐๐๐โ] ๐ฐ๐ถ๐๐ฐ๐๐ณ๐ด ๐๐ฝ ๐ผ๐พ๐ผ๐ด๐ฝ๐๐พ ๐ด๐ฝ ๐ป๐พ ๐๐๐ด ๐ด๐ฝ๐๐ธ๐พ ๐๐ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `_๐๐จ๐ญ๐๐ก๐ฎ๐ณแ  แทฆ_`, m)}
}
handler.help = ['tiktok' , 'tiktokaudio'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktokaudio']
export default handler

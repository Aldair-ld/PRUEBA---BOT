let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Triste enojada toy.mp3'
conn.sendFile(m.chat, vn, 'Triste enojada toy.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Triste enojada toy|Triste enojada toy|Triste enojada toy|triste enojada toy|Triste enojada toy|Triste enojada toy/
handler.command = new RegExp
module.exports = handler
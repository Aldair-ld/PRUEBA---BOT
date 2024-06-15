let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├*HOLA* ${username} 
├⇶𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├⇶𝐦𝐞𝐧ú 𝐝𝐞 𝐌𝐄𝐍Ú𝐒𝐈𝐌𝐏𝐋𝐄
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
*MENU SIMPLE*

├⇶☙⃝♡〫_${usedPrefix}sc_
├⇶☙⃝♡〫_${usedPrefix}donar_
├⇶☙⃝♡〫_${usedPrefix}infobot_
├⇶☙⃝♡〫_${usedPrefix}grupos_
├⇶☙⃝♡〫_${usedPrefix}instalarbot_
├⇶☙⃝♡〫_${usedPrefix}menusimple_
├⇶☙⃝♡〫_${usedPrefix}menuaudios_
├⇶☙⃝♡〫_${usedPrefix}menu2_
├⇶☙⃝♡〫_${usedPrefix}labiblia_
├⇶☙⃝♡〫_${usedPrefix}estado_
├⇶☙⃝♡〫_${usedPrefix}Bot_
├⇶☙⃝♡〫_¿Qué es un Bot?_
├⇶☙⃝♡〫_Codigos para audios_
├⇶☙⃝♡〫_Términos y condiciones_
├⇶⁩  𖤌⃝͜📬 _#bug_
⁩├⇶  𖤌⃝͜📬 _#report_
├⇶✾⃝᭄🤖_${usedPrefix}join *link del grupo*_ 
├⇶✾⃝᭄🤖_${usedPrefix}bots_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}top10gays_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}toplind@s_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}topput@s_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}toppajer@s_
├⇶𑁍〪〫⃕͜⛧_${usedPrefix}topotakus_
├⇶👻 _#owner_
├⇶🌹⃟🎲  _${usedPrefix}math *modo*_
├⇶🌹⃟🎮 _${usedPrefix}ttt *nombre del la sala*_
├⇶🌹⃟🕹️ _${usedPrefix}delttt *nombre del la sala*_
├⇶🌹⃟♟️ _${usedPrefix}2gay *@tag*_
├⇶🌹⃟🎰 _${usedPrefix}gay *@tag / nombre*_
├⇶🌹⃟⛳ _${usedPrefix}lesbi *@tag / nombre*_
├⇶🌹⃟🏹 _${usedPrefix}pajero *@tag / nombre*_
├⇶🌹⃟🎲 _${usedPrefix}pajera *@tag / nombre*_
├⇶🌹⃟🎮 _${usedPrefix}puta *@tag / nombre*_
├⇶🌹⃟🕹️ _${usedPrefix}puto *@tag / nombre*_
├⇶🌹⃟♟️ _${usedPrefix}rata *@tag / nombre*_
├⇶🌹⃟🎰 _${usedPrefix}manco *@tag / nombre*_
├🌹⃟⛳ _${usedPrefix}manca *@tag / nombre*_
├⇶🌹⃟🏹 _${usedPrefix}formarpareja_
├⇶🌹⃟🎲 _${usedPrefix}dado_
├⇶🌹⃟🎮 _${usedPrefix}simsimi *texto*_
├⇶🌹⃟🕹️ _${usedPrefix}formartrio_
├⇶🌹⃟♟️ _${usedPrefix}love *@tag / nombre*_
├⇶🌹⃟🎰_${usedPrefix}amigorandom_
├⇶🌹⃟⛳ _${usedPrefix}slot *cantidad*_
├⇶🌹⃟🏹 _${usedPrefix}ppt *piedra / papel / tijera*_
├⇶🌹⃟🎲 _${usedPrefix}prostituta *@tag / nombre*_
├⇶🌹⃟🎮 _${usedPrefix}prostituto *@tag / nombre*_
├⇶🌹⃟🕹️_$ {usedPrefix}doxear *@tag / nombre*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}imagen *texto*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}ytsearch *texto*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}dlaudio *link yt*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}dlvid *link yt*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}ytmp3 *link yt*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}ytmp4 *link yt*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}ytmp4.2 *link yt*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}play *titulo del audio*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}play2 *titulo del video*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}play3 *titulo del audio/video*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}play4 *titulo del video*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}letra *nombredelacanción*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}google *texto*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}googlef *texto*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}wikipedia *palabra clave*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}pinterestvideo *link de pinterest*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}tiktokaudio *link del tiktok*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}tiktok *link*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}spotify *autor, cancion*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}acortar *link*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}pinterest *texto*_
├⇶_${usedPrefix}xnxx *link de xnxx*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}xnxxsearch *texto*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}ssweb *link*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}igstory *username*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}igstalk *username*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}animeinfo *nombre del anime*_
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}twvid *link de video de twitter*_
├⇶🗃️⃟ᮬ᮫፝_${usedPrefix}facebook
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}instagramver
├⇶📑️⃟ᮬ᮫፝_${usedPrefix}doxxeo
├⇶✧͢⃟ᤢ💎_${usedPrefix}admins *texto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}añadir *numero*_ 
├⇶✧͢⃟ᤢ💎_${usedPrefix}sacar @tag_
├⇶✧͢⃟ᤢ💎_${usedPrefix}save *@tag + nombre de contacto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}daradmin *@tag*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}quitaradmin *@tag*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}grupo *abrir / cerrar*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable welcome_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable welcome_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable antilink_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable antilink_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable antilink2_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable antilink2_
├⇶✧͢⃟ᤢ💎_${usedPrefix}enable delete_
├⇶✧͢⃟ᤢ💎_${usedPrefix}disable  delete_ 
├⇶✧͢⃟ᤢ💎_${usedPrefix}link_
├⇶✧͢⃟ᤢ💎_${usedPrefix}online
├⇶✧͢⃟ᤢ💎_${usedPrefix}notificar *texto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}setname *Nuevo nombre del grupo*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}setdesc *Nueva descripción del grupo*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}infogrupo_
├⇶✧͢⃟ᤢ💎_${usedPrefix}invocar *texto*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}del *responder a un mensaje del bot*_
├⇶✧͢⃟ᤢ💎_${usedPrefix}fantasmas_
├⇶✧͢⃟ᤢ💎_${usedPrefix}banchat_
├⇶✧͢⃟ᤢ💎_${usedPrefix}unbanchat_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}s_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}sticker_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}semoji_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}wasted_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stonks_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trash_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}rainbow_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}circle_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trigger_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stickermaker_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}attp *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}style *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}attp2 *texto*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}stickerfilter_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}trigger *@tag*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}mp3 *responde a un video*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}img *responde a un sticker*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}blur *responde a una imagen*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}swm *link de imagen de google*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}gif *responde a un sticker/video*_
├⇶❤️⃟⃪͡ꦽ_${usedPrefix}tovideo *responde a una nota de voz*
├⇶⋆⃟ۣۜ🔞_${usedPrefix}video_
├⇶ ⃘่͜͡☔_${usedPrefix}imglesbians_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}porno_
├⇶ ⃘่͜͡☔_${usedPrefix}randomnsfw_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}pornogif_
├⇶ ⃘่͜͡☔_${usedPrefix}sideboobs_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}hentai_
├⇶ ⃘่͜͡☔_${usedPrefix}pene_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}ecchi_
├⇶ ⃘่͜͡☔_${usedPrefix}pussy_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}boobs_
├⇶ ⃘่͜͡☔_${usedPrefix}panties_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}nekogif_
├⇶ ⃘่͜͡☔_${usedPrefix}porno2_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}yaoi_
├⇶ ⃘่͜͡☔_${usedPrefix}yuri_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}yaoigif_
├⇶ ⃘่͜͡☔_${usedPrefix}yurigif_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}pack_
├⇶ ⃘่͜͡☔_${usedPrefix}pack2_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}pack3_
├⇶ ⃘่͜͡☔_${usedPrefix}loli2_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}muslos_
├⇶ ⃘่͜͡☔_${usedPrefix}muslitos_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}booty_
├⇶ ⃘่͜͡☔_${usedPrefix}htrap_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}furro_
├⇶ ⃘่͜͡☔_${usedPrefix}nsfwass_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}bdsm_
├⇶ ⃘่͜͡☔_${usedPrefix}cum_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}ero_
├⇶ ⃘่͜͡☔_${usedPrefix}femdom_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}foot_
├⇶ ⃘่͜͡☔_${usedPrefix}pies_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}glass_
├⇶ ⃘่͜͡☔_${usedPrefix}yuri_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}yaoigif_
├⇶ ⃘่͜͡☔_${usedPrefix}yurigif_
├⇶⋆⃟ۣۜ🔞_${usedPrefix}nsfwloli_
├⇶🌹⃟🔮_${usedPrefix}frase_
├⇶🌹⃟🔮_${usedPrefix}futbol_
├⇶🌹⃟🔮_${usedPrefix}Messi_
├⇶🌹⃟🔮_${usedPrefix}animal_
├⇶🌹⃟🔮_${usedPrefix}meme_
├⇶🌹⃟🔮_${usedPrefix}meme2_
├⇶🌹⃟🔮_${usedPrefix}meme3_
├⇶🌹⃟🔮_${usedPrefix}cat_
├⇶🌹⃟🔮_${usedPrefix}dog_
├⇶🌹⃟🔮_${usedPrefix}pikachu_
├⇶🌹⃟🔮_${usedPrefix}waifu_
├⇶🌹⃟🔮_${usedPrefix}blackpink_
├⇶🌹⃟🔮_${usedPrefix}reto_
├⇶🌹⃟🔮_${usedPrefix}verdad_
├⇶🌹⃟🔮_${usedPrefix}imagenrandom_
├⇶🌹⃟🔮_${usedPrefix}neko_
├⇶🌹⃟🔮_${usedPrefix}lolivid_
├⇶🌹⃟🔮_${usedPrefix}iqtest_
├⇶🌹⃟🔮_${usedPrefix}kpopitzy_
├⇶🌹⃟🔮_${usedPrefix}navidad_
├⇶🌹⃟🔮_${usedPrefix}fondomountain
├⇶🌹⃟🔮_${usedPrefix}wpaesthetic
├⇶🌹⃟🔮_${usedPrefix}rose
├⇶🌹⃟🔮_${usedPrefix}wpgaming
├⇶🌹⃟🔮_${usedPrefix}jisoo
├⇶🌹⃟🔮_${usedPrefix}jeni
├⇶🌹⃟🔮_${usedPrefix}loli_
├⇶🌹⃟🔮_${usedPrefix}Akira_
├⇶🌹⃟🔮_${usedPrefix}Anna_
├⇶🌹⃟🔮_${usedPrefix}Asuna_
├⇶🌹⃟🔮_${usedPrefix}boruto_
├⇶🌹⃟🔮_${usedPrefix}elaina_
├⇶🌹⃟🔮_${usedPrefix}hestia_
├⇶🌹⃟🔮_${usedPrefix}cosplay_
├⇶🌹⃟🔮_${usedPrefix}mikasa_
├⇶🌹⃟🔮_${usedPrefix}madara_
├⇶🌹⃟🔮_${usedPrefix}itachi_
├⇶🌹⃟🔮_${usedPrefix}Keneki_
├⇶🌹⃟🔮_${usedPrefix}itori_
├⇶🌹⃟🔮_${usedPrefix}Nezuko_
├⇶🌹⃟🔮_${usedPrefix}Sagiri_
├⇶🌹⃟🔮_${usedPrefix}Naruto_
├⇶🌹⃟🔮_${usedPrefix}Minato_
├⇶🌹⃟🔮_${usedPrefix}Sakura_
├⇶🌹⃟🔮_${usedPrefix}Kurumi_
├⇶🌹⃟🔮_${usedPrefix}Kaori_
├⇶🌹⃟🔮_${usedPrefix}Kagura_
├⇶🌹⃟🔮_${usedPrefix}Kaga_
├⇶🌹⃟🔮_${usedPrefix}isuzu_
├⇶🌹⃟🔮_${usedPrefix}inori_
├⇶🌹⃟🔮_${usedPrefix}Hinata_
├⇶🌹⃟🔮_${usedPrefix}Emilia_
├⇶🌹⃟🔮_${usedPrefix}Eba_
├⇶🌹⃟🔮_${usedPrefix}Deidara_
├⇶🌹⃟🔮_${usedPrefix}Chitoge_
├⇶🌹⃟🔮_${usedPrefix}Chiho_
├⇶🌹⃟🔮_${usedPrefix}Asuna_
├⇶🌹⃟🔮_${usedPrefix}Akiyama_
├⇶🌹⃟🔮_${usedPrefix}gawrgura_
├⇶🌹⃟🔮_${usedPrefix}miku_
├⇶🌹⃟🔮_${usedPrefix}nyan_
├⇶🌹⃟🔮_${usedPrefix}pat_
├⇶🌹⃟🔮_${usedPrefix}itachi_
├⇶🌹⃟🔮_${usedPrefix}slap_
├⇶🌹⃟🔮_${usedPrefix}pat_
├⇶🌹⃟🔮_${usedPrefix}perfil_
├⇶🌹⃟🔮_${usedPrefix}scan_
├⇶🌹⃟🔮_${usedPrefix}kpop_
├⇶🌹⃟🔮_${usedPrefix}qr *texto*_
├⇶🌹⃟🔮_${usedPrefix}afk *motivo*_
├⇶🌹⃟🔮_${usedPrefix}CristianoRonaldo_
├⇶🌹⃟🔮_${usedPrefix}pregunta *pregunta*_
├⇶🌹⃟🔮_${usedPrefix}mention *texto*_
├⇶🌹⃟🔮_${usedPrefix}spamchat *texto*_
├⇶🌹⃟🔮_${usedPrefix}traducir es *texto*_
├⇶🌹⃟🔮_${usedPrefix}zodiac *AAAA MM DD*_
├⇶🌹⃟🔮_${usedPrefix}readmore *texto1| texto2*_
├⇶🌹⃟🔮_${usedPrefix}calc *expresión matemática*_ 
├⇶🌹⃟🔮_${usedPrefix}spamwa *numero|texto|cantidad*_
├⇶🌹⃟🔮_${usedPrefix}readqr *responde a un código QR*_
├⇶🌹⃟🔮_${usedPrefix}anime *random / waifu / husbu /neko*_
├⇶🌹⃟🔮_${usedPrefix}subirestado *texto / responder video, imagen o gif*_
├⇶🍷⃟🎧_${usedPrefix}bass_
├⇶🍷⃟🎧_${usedPrefix}deep_
├⇶🍷⃟🎧_${usedPrefix}earrape_
├⇶🍷⃟🎧_${usedPrefix}fast_
├⇶🍷⃟🎧_${usedPrefix}fat_
├⇶🍷⃟🎧_${usedPrefix}nightcore_
├⇶🍷⃟🎧_${usedPrefix}reverse_
├⇶🍷⃟🎧_${usedPrefix}robot_
├⇶🍷⃟🎧_${usedPrefix}slow_
├⇶🍷⃟🎧_${usedPrefix}smooth_
├⇶🍷⃟🎧_${usedPrefix}vibracion *cantidad*_


├⇶𖥨⸽⃟👻_${usedPrefix}start_
├⇶𖥨⸽⃟👻_${usedPrefix}next_
├⇶𖥨⸽⃟👻_${usedPrefix}leave_
├⇶➶⃟🅦 _${usedPrefix}stop_
├⇶➶⃟🅦 _${usedPrefix}jadibot_
├⇶➶⃟🅦 _${usedPrefix}getcode_
├⇶☙꙰⃝📝️ _${usedPrefix}logos_ (lista)
├⇶☙꙰⃝📝️_${usedPrefix}lolice_
├⇶☙꙰⃝📝️_${usedPrefix}simpcard_
├⇶☙꙰⃝📝️_${usedPrefix}hornycard_ 
├⇶☙꙰⃝📝️_${usedPrefix}lblackpink_
├⇶☙꙰⃝📝️_${usedPrefix}coffe *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}tahta *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}nulis *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}nulis2 *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}lolice *@tag*_
├⇶☙꙰⃝📝️_${usedPrefix}simpcard *@tag*_
├⇶☙꙰⃝📝️_${usedPrefix}logotaza *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}logocesped *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}logotaza2 *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}flaming *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}logofire *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}logosky *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}logocorazon *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}logorandom *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}neonfire *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}technology *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}playa *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}ytcomment *texto*_ 
├⇶☙꙰⃝📝️_${usedPrefix}lovemessages *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}cementerio *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}romanticdouble *texto*_
├⇶☙꙰⃝📝️_${usedPrefix}romanticmessages *texto*_
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

_𝐃𝐑𝐀𝐆𝐎́𝐍_𝐁𝐀𝐋𝐋 - 𝐁𝐎𝐓 𝐌𝐃_
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣', '❍͜͡➣𝐌𝐄𝐍Ú 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎❍͜͡➣', `#Menucompleto`, '❍͜͡➣𝐈𝐍𝐅𝐎𝐁𝐎𝐓❍͜͡➣', `#infobot`, '❍͜͡➣𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐄𝐒❍͜͡➣', `#CREADORES`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menusimple|MENUSIMPLE)$/i
handler.fail = null
module.exports = handler

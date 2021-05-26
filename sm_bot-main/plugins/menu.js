let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
🤖═〘 ANDROID YAKKU 〙BOT  ═🤖
█▀█ █▀ ▀ █▀ ▀ █▀█ █
█▄█ █▀ █ █▄ █ █▀█ █▄

  ANDROID YAKKU 
   Creator
  🤞🏻••ShAlItHa••🤞🏻
╭══•›「 *ShAlItHa* 」
│phone :wa.only
Wa.me/+94740082154
ANDRID YAKKU 
│
│ 
│    
╰══════════════
Hi, ${name} 👋
Exp: ${exp}
📟 Time: ${time}
📆 Date: ${week}, ${date}
${more.repeat(1000)}
How to Add XP:
+1 Exp/regular message
+10 Exp/command
╠═✪〘 Menu 〙✪═
║
╠═〘 Command 〙 ═
╠➥ ${_p}menu
╠➥ ${_p}help
║
╠═〘 Tutor BoT 〙 ═
╠➥ ${_p}tutorial
║
╠═〘 Others 〙 ═
╠➥ ${_p}modApk
╠═〘 Group 〙 ═
╠➥ ${_p}linkgrup
╠➥ ${_p}hidetag [text]
║
╠═〘 INFO 〙 ═
╠➥ ${_p}info
║
║
╠═〘 ADVERTISEMENT 〙 ═
╠➥ 📌OUR APP👇
📎 https://www.mediafire.com/file/cw00x8hxcn99yz6/ANDROIDYAKKU_.apk/file
╠➥ 
╠➥ 🌎OUR WEB👇
📎 http://androidyakku.22web.org/
╠➥ 
╠➥ ✤Android Yakku facebook Groups
╠➥ https://www.facebook.com/groups/392696778069931/?ref=share
╠➥ ✤facebook page android yakku
╠➥ https://www.facebook.com/ඇන්ඩොයිඩ්-යක්කු-Android-Yakku-100144138540709/
║
║
╠═〘 Info Bot 〙 ═
╠➥ Name : ═〘 ShAlItHa 〙BOT  ═
╠➥ Coded using * VS CODE * on LINUX \\ JAVA SCRIPT
╠➥ Request? wa.me//+94740082154
╠═════
║ Advanced:
║  > return m
║
╠══〘 android yakku 〙BOT  ═⭐
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

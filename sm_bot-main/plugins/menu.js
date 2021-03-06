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
π€βγ ANDROID YAKKU γBOT  βπ€
βββ ββ β ββ β βββ β
βββ ββ β ββ β βββ ββ

  ANDROID YAKKU 
   Creator
  π€π»β’β’ShAlItHaβ’β’π€π»
β­βββ’βΊγ *ShAlItHa* γ
βphone :wa.only
Wa.me/+94740082154
ANDRID YAKKU 
β
β 
β    
β°ββββββββββββββ
Hi, ${name} π
Exp: ${exp}
π Time: ${time}
π Date: ${week}, ${date}
${more.repeat(1000)}
How to Add XP:
+1 Exp/regular message
+10 Exp/command
β ββͺγ Menu γβͺβ
β
β βγ Command γ β
β β₯ ${_p}menu
β β₯ ${_p}help
β
β βγ Tutor BoT γ β
β β₯ ${_p}tutorial
β
β βγ Others γ β
β β₯ ${_p}modApk
β βγ Group γ β
β β₯ ${_p}linkgrup
β β₯ ${_p}hidetag [text]
β
β βγ INFO γ β
β β₯ ${_p}info
β
β
β βγ ADVERTISEMENT γ β
β β₯ πOUR APPπ
π https://www.mediafire.com/file/cw00x8hxcn99yz6/ANDROIDYAKKU_.apk/file
β β₯ 
β β₯ πOUR WEBπ
π http://androidyakku.22web.org/
β β₯ 
β β₯ β€Android Yakku facebook Groups
β β₯ https://www.facebook.com/groups/392696778069931/?ref=share
β β₯ β€facebook page android yakku
β β₯ https://www.facebook.com/ΰΆΰΆ±ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰΆ©ΰ·-ΰΆΊΰΆΰ·ΰΆΰ·-Android-Yakku-100144138540709/
β
β
β βγ Info Bot γ β
β β₯ Name : βγ ShAlItHa γBOT  β
β β₯ Coded using * VS CODE * on LINUX \\ JAVA SCRIPT
β β₯ Request? wa.me//+94740082154
β βββββ
β Advanced:
β  > return m
β
β ββγ android yakku γBOT  ββ­
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

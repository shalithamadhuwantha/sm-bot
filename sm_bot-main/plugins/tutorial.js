let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: ShAlItHa 
📌OUR APP👇
📎 https://www.mediafire.com/file/cw00x8hxcn99yz6/ANDROIDYAKKU_.apk/file

🌎OUR WEB👇
📎 http://androidyakku.22web.org/

✤Android Yakku facebook Groups

https://www.facebook.com/groups/392696778069931/?ref=share

✤facebook page android yakku

https://www.facebook.com/ඇන්ඩොයිඩ්-යක්කු-Android-Yakku-100144138540709/


`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


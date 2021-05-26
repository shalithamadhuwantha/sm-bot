let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠══〘 ShAlItHa 〙BOT  ═

***HELLO GUYS***
  හෙලෝ යාලුවන්නේ....

new whatsapp bot කෙනෙක් මෙයා....
  
   ...පොඩි විස්තරයක්...
  
  මෙක හැදුවේ මම එකියන්නේ ශලිත...මේකට මූලිකවම ජාවා ස්ක්‍රිප්ට් යෝදාගත්තා
  එතකොට කොහොමද මේ bot use කරන්නේ??
  *1)මුලිම්ම # {හැශ්} ලකුන ඔබලා menu {#menu} tupe කරලා send කරන්න

  2)ඉටපස්සේ ලොකු අයිටම් ලිස්ට් එකක් එයි එකෙන් ඔන එකක් තෝරලා ටයිප් කරන්න*

  * මතක ඇතුව # ඔබලා අර menu එකේ පෙන්නන command ගහන්න ඔනි*
  
  මෙකෙන් ඔයාලට පුලුවන් මේ group එකේ invite link එක ගන්න
  එවගේම බණ්ඩාර සර් ගේ youtube chanel එකටත් යන්න පුලුවන්
  එවගෙම පොඩි ඔනිවෙයි කියලා හිතෙන mod apk වගයකුත් දාලා තියෙනවා

  *තව ඉස්සරහට එක එක වැඩ කැලි එකතු කරන්නම්* 

  

╠══〘 ShAlItHa 〙BOT  ═
`.trim(), m)
}
handler.command = /^(info|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

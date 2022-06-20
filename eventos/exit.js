module.exports = {
  name: "exit",
  type: "guildMemberRemove"
}

module.exports.run = async (member, client) => {
  
  const Discord = require("discord.js");
  
  if (member.guild.id != "597137568605274112") return;
  if (member.user.bot) return;
  
    let MembroSaiuEmbed = new Discord.MessageEmbed()
  .setAuthor(`» Press F! Soldado Abatido: ${member.user.tag}\n Rest in Peace`, "https://i.imgur.com/1hE4YLX.png")
  .setColor(client.cor)
  
  member.guild.channels.cache.get("600300473848823809").send(MembroSaiuEmbed);

};
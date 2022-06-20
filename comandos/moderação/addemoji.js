const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
  name: "addemoji",
  description: "",
  aliases: [],
  oculto: true
}

module.exports.run = async (client, message, res) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Comando com permissão apenas para administradores!", client.err).setColor(client.cor));
  if(!res[0]) return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Indique um nome para o emoji!", client.warn).setColor(client.cor))
  if(!res[1]) return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Indique um link para o emoji!", client.warn).setColor(client.cor))
  
  message.guild.emojis.create(res[1], res[0]);
  message.inlineReply(new Discord.MessageEmbed().setAuthor("» Emoji criado com sucesso!", client.ok).setColor(client.cor))
    
}

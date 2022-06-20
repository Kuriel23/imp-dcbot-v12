const Discord = require('discord.js')

module.exports = {
  name: "ping",
  description: "Veja se estou rápido, ou se a minha máquina está lenta.",
  aliases: ["pong"]
}

module.exports.run = async (client, message, res) => {
    let pingEmbed = new Discord.MessageEmbed()
        .setAuthor("» Pong!", "https://img.icons8.com/emoji/452/ping-pong-emoji.png")
        .addField("Meu tempo de resposta é:", Date.now() - message.createdTimestamp+ "ms")
        .addField("Latência da API é:", Math.round(client.ws.ping) + "ms")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        .setColor(client.cor) 
    message.inlineReply(pingEmbed)}
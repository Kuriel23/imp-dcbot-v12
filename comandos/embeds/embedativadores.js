const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
  name: "embedativadores",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Ativadores", "https://i.imgur.com/BZLf96g.png")
    .setDescription(
      `Ativadores servem para você receber um cargo de notificação ou acesso a algum contéudo.\n\nVocê pode clicar abaixo em algum dos botões para obter algum cargo.`
    )                  
    .setImage("https://i.imgur.com/p49hnDQ.png")
    .setColor(client.cor)
    .setFooter("Esperemos que goste da sua experiência customizada!")
	let anuncio = new MessageButton()
    .setLabel("Notificar Notícias")
    .setStyle("blurple")
    .setEmoji("📰")
    .setID("anuncio");
	let parceria = new MessageButton()
    .setLabel("Notificar Parcerias")
    .setStyle("blurple")
    .setEmoji("🤝")
    .setID("parceria");
	let mudae = new MessageButton()
    .setLabel("Acessar Mudae")
    .setStyle("blurple")
    .setEmoji("❤️")
    .setID("mudae");
	const ativadores = new MessageActionRow().addComponents(anuncio, parceria, mudae)
    message.channel.send(embed, {component: ativadores})
    }
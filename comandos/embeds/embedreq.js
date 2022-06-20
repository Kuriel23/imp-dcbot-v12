const Discord = require('discord.js');

module.exports = {
  name: "embedreq",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Requisitos", "https://i.imgur.com/E1MD7pO.png")
    .setDescription(
      `Mínimo de 50 membros\nMencionar um Ping na Mensagem\nCanal para divulgar parcerias\nRepresentante\nRespeitar os [Termos do Discord](https://discord.com/terms)\n\n**Caso queira ser parceiro, fale em <#962803914208600124>.**`
    )                  
    .setImage("https://i.imgur.com/my2H4VJ.png")
    .setColor(client.cor)
    .setFooter("Caso o seu convite expire ou representante saia, excluiremos a parceria e o representante perderá o cargo! ● Créditos Banner: Ferrari Vrum Vrum#0339")
    message.channel.send(embed)
    }
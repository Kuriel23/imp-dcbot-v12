const Discord = require('discord.js');

module.exports = {
  name: "embedpp",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Pedir Parceria", "https://i.imgur.com/EXDNc2Y.png")
    .setDescription(
      `Para pedir parceria, apenas mande a **mensagem de parceria do seu servidor** e nossa equipe analisará seu servidor e avisaremos sobre a realização da parceria.`
    )                  
    .setImage("https://i.imgur.com/NLDSEcC.png")
    .setColor(client.cor)
    .setFooter("Nunca foi tão fácil fazer parcerias!")
    message.channel.send(embed)
    }
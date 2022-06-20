const Discord = require('discord.js');

module.exports = {
  name: "embedparceiros",
  description: "",
  aliases: []
}

module.exports.run = async (client, message, res) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Você não é um Staff Gamer, tente novamente quando for um Staff qualificado!");
  
  let embed = new Discord.MessageEmbed() 
    .setAuthor("» Parceiros", "https://image.flaticon.com/icons/png/512/4214/4214044.png")
    .setDescription(
      `Nesta aba apresentamos servidores ou empresas que lhe oferecemos crédito nessa relação e ajuda ao projeto. Siga-os que eles merecem!\n\nSe você quiser fazer parte em ajudar este projeto e estar nesta área, fale com o <@354233941550694400>`
    )                  
    .setImage("https://i.imgur.com/FlfpV5I.png")
    .setColor(client.cor)
    .setFooter("Todas as parcerias devem cumprir e cumprem as diretrizes do Discord!")
    message.channel.send(embed)
    }
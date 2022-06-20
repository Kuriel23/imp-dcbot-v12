const Discord = require("discord.js");

module.exports = {
  name: "abraçar",
  description: "Abrace alguém!",
  aliases: ["hug", "abraço"]
}

module.exports.run = async (client, message, res) => {
  let membro = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Indique uma Menção.", client.warn).setColor(client.cor));
  if (membro.id == message.author.id)
    return message.inlineReply(new Discord.MessageEmbed().setAuthor("» Você não pode se abraçar.", client.err).setColor(client.cor));
  var AbraçoEmbed = new Discord.MessageEmbed()
    .setColor(client.cor)
    .setAuthor(
      `» ${message.author.username} deu um abraço no(a) ${membro.username}`, "https://image.flaticon.com/icons/png/512/1141/1141107.png"
    )
    .setImage("https://media.giphy.com/media/kwJw7CXcybyTu/giphy.gif")
    .setFooter(`${message.author.tag}`, message.author.avatarURL())
    .setTimestamp();

  message.inlineReply(AbraçoEmbed);
};

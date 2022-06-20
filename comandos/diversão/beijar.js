const Discord = require("discord.js");

module.exports = {
  name: "beijar",
  description: "Beije alguém.",
  aliases: ["kiss", "beijo"]
};

module.exports.run = async (client, message, res) => {
  let user = message.mentions.users.first();
  if (!user)
    return message.inlineReply(
      new Discord.MessageEmbed()
        .setAuthor("» Indique uma Menção.", client.warn)
        .setColor(client.cor)
    );
  let gifs = [
    "https://acegif.com/wp-content/uploads/anime-kissin-5.gif",
    "https://i.pinimg.com/originals/f1/5c/77/f15c774e5c58a9f210c7f7647da796f1.gif",
    "https://i.pinimg.com/originals/c8/90/be/c890be9547d54c64242ecebcbb23d4dc.gif",
    "https://acegif.com/wp-content/uploads/anime-kissin-10.gif",
    "https://acegif.com/wp-content/uploads/anime-kiss-38.gif"
  ];
  let random = Math.round(Math.random() * gifs.length);
  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `» ${message.author.username} deu um beijo no(a) ${user.username}`,
      "https://image.flaticon.com/icons/png/128/599/599681.png"
    )
    .setImage(
      gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1]
    )
    .setColor(client.cor)
    .setTimestamp();
  message.inlineReply(embed);
};

const Discord = require("discord.js");

module.exports = {
  name: "morder",
  description: "Morda ele!!",
  aliases: ["bite", "mordida"]
};

module.exports.run = async (client, message, res) => {
  let user = message.mentions.users.first();
  if (!user)
    return message.inlineReply(
      new Discord.MessageEmbed()
        .setAuthor("» Indique uma menção.", client.warn)
        .setColor(client.cor)
    );
  let gifs = [
    "https://c.tenor.com/w4T323o46uYAAAAC/anime-bite.gif",
    "https://cdn.discordapp.com/attachments/862393318516195358/875768017680752730/4f5666861516073c1c8015b2af7e2d15.gif",
    "https://i.pinimg.com/originals/17/f0/fc/17f0fc8bc1e0d5df5f519b8cd9237ac8.gif",
    "https://thumbs.gfycat.com/DefiniteBossyFlounder-size_restricted.gif"
  ];
  let random = Math.round(Math.random() * gifs.length);
  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `» ${message.author.username} deu uma mordida no(a) ${user.username}`,
      "https://image.flaticon.com/icons/png/128/185/185474.png"
    )
    .setImage(
      gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1]
    )
    .setColor(client.cor)
    .setTimestamp();
  message.inlineReply(embed);
};

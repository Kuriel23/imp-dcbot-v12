const Discord = require("discord.js");

module.exports = {
  name: "matar",
  description: "Mate a pessoa que você mais odeia neste momento.",
  aliases: ["kill"]
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
    "https://c.tenor.com/Mn4W4D899WEAAAAS/ira-gamagoori-attack.gif",
    "https://i.pinimg.com/originals/cc/87/65/cc87656cf72979fb8ee01c3eebc5cdff.gif",
    "https://media0.giphy.com/media/eLsxkwF5BRtlK/giphy.gif"
  ];
  let random = Math.round(Math.random() * gifs.length);
  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `» ${message.author.username} matou o(a) ${user.username}`,
      "https://image.flaticon.com/icons/png/128/3309/3309192.png"
    )
    .setImage(
      gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1]
    )
    .setColor(client.cor)
    .setTimestamp();
  message.inlineReply(embed);
};

const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
  name: "avatar",
  description: "Visualize seu avatar ou de alguma pessoa",
  aliases: []
};

module.exports.run = async (client, message, res) => {
  try {
    let member =
      message.mentions.users.first() ||
      client.users.cache.get(res[0]) ||
      message.author;
    let avatar = member.avatarURL({
      dynamic: false,
      format: "png" || "gif",
      size: 512
    });

    let button = new MessageButton()
      .setStyle("url")
      .setURL(avatar)
      .setLabel("Veja o Avatar")
      .setEmoji("854024424432336926");

    var Avatar = new Discord.MessageEmbed()
      .setAuthor(
        `» Avatar de ${member.tag}`,
        "https://image.flaticon.com/icons/png/128/3135/3135715.png"
      )
      .setFooter(`${message.author.tag}`, message.author.avatarURL())
      .setImage(avatar)
      .setColor(client.cor)
      .setTimestamp();
    message.inlineReply(Avatar);
  } catch (err) {
    message.inlineReply(
      new Discord.MessageEmbed()
        .setAuthor("» Não foi possível receber o avatar.", client.err)
        .setColor(client.cor)
    );
  }
};

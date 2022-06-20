const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "triggered",
  description: "Eita bixo! Ele está bravinho!",
  aliases: []
};

module.exports.run = async (client, message, res) => {
  message.channel.startTyping();
  let member =
    message.mentions.users.first() ||
    client.users.cache.get(res[0]) ||
    message.author;
  let avatar = member.avatarURL({
    dynamic: true,
    format: "png" || "gif",
    size: 1024
  });
  let image = await canvacord.Canvas.trigger(avatar);
  let attachment = new Discord.MessageAttachment(image, "triggered.gif");
  message.inlineReply(attachment);
  message.channel.stopTyping();
};

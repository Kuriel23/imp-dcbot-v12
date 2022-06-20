const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "love",
  description: "Veja se o amor está no ar.",
  aliases: ["amor"]
};

module.exports.run = async (client, message, res) => {
  message.channel.startTyping();

  let [first, second] = message.mentions.users.keyArray();

  let member =
    message.mentions.users.first() ||
    client.users.cache.get(first) ||
    message.author;
  let avatar = member.avatarURL({ dynamic: true, format: "png", size: 512 });
  let member2 = client.users.cache.get(second) || message.author;
  let avatar2 = member2.avatarURL({ dynamic: true, format: "png", size: 512 });

  const { body } = await superagent.get(
    `https://nekobot.xyz/api/imagegen?type=ship&user1=${avatar}&user2=${avatar2}`
  );
  const attachment = new Discord.MessageAttachment(body.message, "love.png");
  message.inlineReply(attachment);
  message.channel.stopTyping();
};

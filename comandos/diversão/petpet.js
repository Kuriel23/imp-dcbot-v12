const Discord = require("discord.js");
const petPetGif = require("pet-pet-gif");

module.exports = {
  name: "petpet",
  description: "Olha que coisa fofa!!",
  aliases: []
};

module.exports.run = async (client, message, res) => {
  message.channel.startTyping();

  let member =
    message.mentions.users.first() ||
    client.users.cache.get(res[0]) ||
    message.author;
  let petpet = await petPetGif(
    member.avatarURL({ dynamic: true, format: "png" || "gif", size: 1024 })
  );
  message.inlineReply(new Discord.MessageAttachment(petpet, "petpet.gif"));
  message.channel.stopTyping();
};

const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
  name: "dog",
  description: "Visualize cachorros!",
  aliases: ["cão", "cachorro", "cao"]
};

module.exports.run = async (client, message, res) => {
  let button = new MessageButton()
    .setLabel("Woof")
    .setStyle("blurple")
    .setEmoji("🐶")
    .setID("doguinho");
  message.channel.send("Com certeza ver um cão?", button);
  client.on("clickButton", async button => {
    if (button.id === "doguinho") {
      const { body } = await superagent.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      let DogEmbed = new Discord.MessageEmbed()
        .setAuthor(
          "» Cachorrinhos são fofinhos!",
          "https://image.flaticon.com/icons/png/128/5170/5170640.png"
        )
        .setImage(body.message)
        .setColor(client.cor);
      button.reply.send(DogEmbed, true);
    }
  });
};

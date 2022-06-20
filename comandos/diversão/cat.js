const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
  name: "cat",
  description: "Visualize gatos :D",
  aliases: ["gato"]
};

module.exports.run = async (client, message, res) => {
  let button = new MessageButton()
    .setLabel("Miau")
    .setStyle("blurple")
    .setEmoji("🐱")
    .setID("gatinho");
  message.channel.send("Com certeza ver um gato?", button);
  client.on("clickButton", async button => {
    if (button.id === "gatinho") {
      const { body } = await superagent
        .get(
          "https://api.thecatapi.com/v1/images/search?format=json&mime_types=png,jpg,gif"
        )
        .set("cec9857c-4170-466c-8506-8c7850990642", "cec9857c-4170-466c-8506-8c7850990642");
      let CatEmbed = new Discord.MessageEmbed()
        .setAuthor(
          "» Gatinhos são MUITOOOOOOO FOFOOOOOOSSSSSSS!",
          "https://image.flaticon.com/icons/png/128/2325/2325273.png"
        )
        .setImage(body[0].url)
        .setColor(client.cor);
      button.reply.send(CatEmbed, true);
    }
  });
};

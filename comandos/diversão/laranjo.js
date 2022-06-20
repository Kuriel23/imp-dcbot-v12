const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = {
  name: "laranjo",
  description: "Faça o laranjo falar algo.",
  aliases: []
};

module.exports.run = async (client, message, res) => {
  if (!res[0])
    return message.reply(
      new Discord.MessageEmbed()
        .setAuthor("» Indique um texto para o Laranjo falar.", client.warn)
        .setColor(client.cor)
    );
  message.channel.startTyping();
  const canvas = Canvas.createCanvas(685, 494);
  const context = canvas.getContext("2d");
  const background = await Canvas.loadImage(
    "https://cdn.glitch.com/770d441b-300b-4eaa-9d98-ef9bbda28950%2Fa7d9d1fe-02ff-4ac0-8e1c-67d92c8803b4.image.png?v=1628187049798"
  );
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  context.font = `32px sans-serif`;
  context.fillStyle = "#000000";
  context.fillText(`${res.join(" ")}`, 10, 40);

  context.beginPath();
  context.arc(125, 125, 100, 0, Math.PI * 2, true);
  context.closePath();
  context.clip();

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "laranjo.png"
  );
  message.inlineReply(attachment);
  message.channel.stopTyping();
};
